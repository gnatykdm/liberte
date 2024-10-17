import os
import time
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Integer
from telebot import TeleBot
import schedule

load_dotenv()


TOKEN = os.getenv("TOKEN")
bot = TeleBot(TOKEN)

Base = declarative_base()

class Mails(Base):
    __tablename__ = "mails_content"

    message_id = Column("message_id", Integer, primary_key=True)
    sender_mail = Column("sender_mail", String)
    sender_name = Column("sender_name", String)
    message_theme = Column("message_theme", String)
    message_content = Column("message_content", String)
    sent_time = Column("sent_time", String)

class Phone(Base):
    __tablename__ = "_phone_content"

    id = Column("id", Integer, primary_key=True)
    name = Column("_name", String)
    phone = Column("_phone", String)
    time = Column("_time", String)

class Connection:
    def __init__(self, db_url):
        self.engine = create_engine(db_url)
        self.Session = sessionmaker(bind=self.engine)

    def create_tables(self):
        Base.metadata.create_all(self.engine)

    def get_session(self):
        return self.Session()

db_url = 'postgresql+psycopg2://postgres:0110@localhost:5432/libertdb'
connection = Connection(db_url)

last_mail_id = None
last_phone_id = None

def check_new_mails():
    global last_mail_id
    try:
        with connection.get_session() as session:
            new_mails = session.query(Mails).order_by(Mails.message_id.desc()).all()
            if new_mails and (last_mail_id is None or new_mails[0].message_id > last_mail_id):
                for mail in new_mails:
                    if last_mail_id is None or mail.message_id > last_mail_id:
                        bot.send_message(
                            chat_id='899573357',
                            text=(
                                f"*Новий лист від:* {mail.sender_name}\n"
                                f"*Тема:* {mail.message_theme}\n"
                                f"*Вміст:* {mail.message_content}\n"
                                f"*Час відправлення:* {mail.sent_time}"
                            ),
                            parse_mode='Markdown'
                        )
                last_mail_id = new_mails[0].message_id
    except Exception as e:
        print(f"Помилка при перевірці нових листів: {e}")

def check_new_phones():
    global last_phone_id
    try:
        with connection.get_session() as session:
            new_phones = session.query(Phone).order_by(Phone.id.desc()).all()
            if new_phones and (last_phone_id is None or new_phones[0].id > last_phone_id):
                for phone in new_phones:
                    if last_phone_id is None or phone.id > last_phone_id:
                        bot.send_message(
                            chat_id='899573357',
                            text=(
                                f"*Новий запис телефону:*\n"
                                f"*Ім'я:* {phone.name}\n"
                                f"*Телефон:* {phone.phone}\n"
                                f"*Час отримання:* {phone.time}"
                            ),
                            parse_mode='Markdown'
                        )
                last_phone_id = new_phones[0].id
    except Exception as e:
        print(f"Помилка при перевірці нових телефонів: {e}")

schedule.every(1).minute.do(check_new_mails)
schedule.every(1).minute.do(check_new_phones)

@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, "Привіт! Я бот, який сповіщатиме тебе про нові повідомлення.")

def run():
    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    run()
