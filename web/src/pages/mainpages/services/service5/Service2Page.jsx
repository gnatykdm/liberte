import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import service_img from '../../../../shared/assets/images/headimg.png';

const Service2Page = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme === 'true'; 
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode; 
            localStorage.setItem('isDarkMode', newMode); 
            return newMode; 
        });
    };

    return (
        <div className={`service-page ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Libert - Міжнародна кур’єрська доставка</title>
            </Helmet>

            <Header 
                image={flag}
                head={"Головна"}
                services={"Послуги"} 
                service_drop={"Негабаритні перевезення"}
                about={"Про нас"}
                contacts={"Контакти"}
                call={"Замовити дзвінок"}
                order={"Замовити"}
                social_networks={"Libert у соціальних мережах"}
                name_type={"Ваше ім'я"}
                tel_type={"Ваш номер телефону"}
                main_link={"/"}
                about_link={"/about"}
                contact_link={"/contact"}
                toggleTheme={toggleTheme} 
                isDarkMode={isDarkMode}
                messageStatus={"Повідомлення Відправлено"}
                service1="FulFillment"
                service2="Міжнародна кур'єрська доставка"
                service3="Негабаритні перевезення"
                service4="Послуги митного агенства"
                service5="Складська Логістика"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/service2/en"}
                languagelink_2={"/service2"}
                languagelink_3={"/service2/pl"}
                photo_link={"/"}
            />

            <div className="some-age-info">
                <PageInfo text="Міжнародна Кур’єрська Доставка" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>Міжнародна кур’єрська доставка включає в себе:</p>
                    <ul>
                        <li><b className="some-cont">Кур'єрська доставка:</b> Ми надаємо послуги, що поєднують точність, надійність і персоналізований підхід для зручної логістики.</li>
                        <br/>
                        <li><b className="some-cont">Співпраця з кур'єрськими службами:</b> Працюємо з українськими та європейськими партнерами, що дає змогу знижувати витрати на доставку.</li>
                        <br/>
                        <li><b className="some-cont">Економія на доставці:</b> Завдяки нашій співпраці, ви отримуєте вигідніші ціни, ніж при самостійній організації доставки.</li>
                        <br/>
                        <li><b className="some-cont">Якість і швидкість:</b> Ми забезпечуємо доставку без компромісів щодо якості та швидкості. Тривалість доставки становить від 2 до 14 робочих днів, залежно від країни призначення.</li>
                    </ul>
                    <p>Наша команда готова допомогти вам з усіма аспектами міжнародної доставки, щоб ваші вантажі завжди прибували вчасно та в цілості.</p>
                </div>
                <div className="service-img-page">
                    <img src={service_img} alt="International courier services"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Ваш спокій — наша мета. Ми забезпечуємо точність, надійність та"}
                    part2={"індивідуальний підхід, щоб зробити міжнародну доставку максимально простою для вас."}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення Відправлено"}
                    messageError={"Проблема із відправкою"}
                />

            <Footer
                head="Головне меню"
                head2="Меню"
                head3="Наші контакти"
                services={"Послуги"}
                contacts="Контакти"
                main_link="/"
                about_link="/about"
                contact_link="/contact"
                about="Про Нас"
                service1="FulFillment"
                service2="Міжнародна кур'єрська доставка"
                service3="Негабаритні перевезення"
                service4="Послуги митного агенства"
                service5="Складська Логістика"
                service1_link={"/service1"}
                service2_link={"/service2"}
                service3_link={"/service3"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                />
            </center>
        </div>
    );
}
export default Service2Page;
