from telebot import TeleBot

# Ваш токен Telegram бота
TOKEN = "8112154589:AAE5HLokYYbGF8pSkYHuJGJ3mt5nateCoho"
bot = TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, "Привет! Теперь я могу отправлять тебе сообщения.")
    print(f"Chat ID: {message.chat.id}")  # Выводит ID чата в консоль

# Запуск бота
bot.infinity_polling()

if __name__ == '__main__':
    pass
