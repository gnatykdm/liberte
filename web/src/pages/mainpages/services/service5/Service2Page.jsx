import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import ukraine_flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import international_delivery_logo from '../../../../shared/assets/images/internation_delivery_logo.png';

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
                {/* Title of the page */}
                <title>Libert - Міжнародна кур’єрська доставка</title>

                {/* Meta Description for SEO */}
                <meta name="description" content="Libert offers fast, reliable, and cost-effective international courier delivery services in Ukraine and worldwide. Enjoy personalized logistics solutions, efficient delivery, and competitive rates." />

                {/* Meta Keywords for SEO */}
                <meta name="keywords" content="міжнародна доставка, кур'єрська доставка, доставка по всьому світу, швидка доставка, доставка з України, логістика, міжнародні вантажі" />

                {/* Open Graph Meta Tags for social media sharing */}
                <meta property="og:title" content="Libert - Міжнародна кур’єрська доставка" />
                <meta property="og:description" content="Libert offers fast, reliable, and cost-effective international courier delivery services for shipments worldwide. Get the best rates and ensure timely deliveries." />
                <meta property="og:url" content="https://libertgroup.pl/service2" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags for Twitter sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Libert - Міжнародна кур’єрська доставка" />
                <meta name="twitter:description" content="Fast and reliable international courier delivery services by Libert. Enjoy personalized service, affordable rates, and timely deliveries." />
                <meta name="twitter:image" content="https://yourwebsite.com/path/to/your/image.jpg" />

                {/* Additional Meta Tags for accessibility and SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Libert Courier Services" />

                {/* Charset and Viewport for mobile responsiveness */}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <Header 
                image={ukraine_flag}
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
                messageStatus={"Повідомлення відправлено"}
                service1="Fulfillment"
                service2="Негабаритні перевезення"
                service3="Міжнародна кур'єрська доставка"
                service4="Послуги митного агенства"
                service5="Складська логістика"
                service1_link={"/service1"}
                service2_link={"/service3"}
                service3_link={"/service2"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/service2/en"}
                languagelink_2={"/service2/"}
                languagelink_3={"/service2/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
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
                    <p>Наша команда готова допомогти вам з усіма аспектами міжнародної доставки, щоб ваші вантажі завжди прибували вчасно та неушкоджено.</p>
                </div>
                <div className="service-image-main-container">
                    <img src={international_delivery_logo} alt="logistic" className="service-image-desc"/>
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Ваш спокій — наша мета. Ми забезпечуємо точність, надійність та"}
                    part2={"індивідуальний підхід, щоб зробити міжнародну доставку максимально простою."}
                    order_call={"Замовити дзвінок"}
                    order={"Замовити дзвінок"}
                    name_type={"Ваше ім'я"}
                    tel_type={"Ваш телефон"}
                    isDarkMode={isDarkMode}
                    messageSuccess={"Повідомлення відправлено"}
                    messageError={"Проблема із відправкою"}
                    order_call_sending={"відправка повідомлення..."}
                    order_call_problem={"проблема з відправкою"}
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
                    service1="Негабаритні перевезення"
                    service2="Fulfillment"
                    service3="Міжнародна кур'єрська доставка"
                    service4="Послуги митного агенства"
                    service5="Складська Логістика"
                    service1_link={"/service3"}
                    service2_link={"/service1"}
                    service3_link={"/service2"}
                    service4_link={"/service4"}
                    service5_link={"/service5"}
                />
            </center>
        </div>
    );
};

export default Service2Page;
