import React, { useState } from 'react'; 
import Header from '../../../../shared/ui/header/Header';
import OrderCall from '../../../../shared/ui/ordercall/OrderCall';
import ukraine_flag from '../../../../shared/assets/icons/ukraine.png';
import Footer from '../../../../shared/ui/footer/Footer';
import PageInfo from '../../../../shared/ui/pageInfo/PageInfo';
import { Helmet } from 'react-helmet';
import PhotoSlider from '../../../../shared/ui/slider/PhotoSlider';

const Service3Page = () => {
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
                <title>Libert - Негабаритні перевезення</title>
                
                {/* SEO Meta Tags */}
                <meta name="description" content="Послуги з транспортування негабаритних вантажів, включаючи комбайни та інфраструктурні об'єкти. Ми забезпечуємо логістичні рішення та супровід вантажів." />
                <meta name="keywords" content="Негабаритні перевезення, транспорт, логістика, перевезення комбайнів, інфраструктурні об'єкти, супровід вантажів" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Libert - Негабаритні перевезення" />
                <meta property="og:description" content="Ми надаємо послуги з транспортування негабаритних вантажів та документального супроводу, гарантуючи надійність і своєчасність." />
                <meta property="og:image" content={ukraine_flag} />
                <meta property="og:url" content="https://www.libertgroup.pl/service3" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Libert - Негабаритні перевезення" />
                <meta name="twitter:description" content="Надаємо послуги з транспортування негабаритних вантажів. Гарантуємо надійність, професіоналізм і своєчасне виконання зобов'язань." />
                <meta name="twitter:image" content={ukraine_flag} />
                <meta name="twitter:card" content="summary_large_image" />
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
                service1="FulFillment"
                service2="Негабаритні перевезення"
                service3="Міжнародна кур'єрська доставка"
                service4="Послуги митного агенства"
                service5="Складська логістика"
                service1_link={"/service1"}
                service2_link={"/service3"}
                service3_link={"/service2"}
                service4_link={"/service4"}
                service5_link={"/service5"}
                languagelink_1={"/service3/en"}
                languagelink_2={"/service3/"}
                languagelink_3={"/service3/pl"}
                photo_link={"/"}
                order_call_sending={"відправка повідомлення..."}
                order_call_problem={"проблема з відправкою"}
            />

            <div className="some-age-info">
                <PageInfo text="Негабаритні Перевезення" isDarkMode={isDarkMode} />
            </div>
            
            <div className={`service-content-about ${isDarkMode ? 'dark' : ''}`}>
                <div className={`text-container-about ${isDarkMode ? 'dark' : ''}`}>
                    <p>
                        Надаємо послуги з транспортування негабаритних вантажів та документального супроводу.
                        Перевозимо від комбайнів до інфраструктурних об’єктів. За нас говорять реалізовані проекти на сайті Єврокомісії.
                        Забезпечуємо повний цикл логістичних рішень, включаючи узгодження дозволів, планування маршрутів, а також організацію супроводу вантажів спеціалізованими транспортними засобами.
                    </p>

                    <p>
                        Наш багаторічний досвід дозволяє оперативно вирішувати будь-які питання, пов'язані з транспортуванням негабариту, дотримуючись міжнародних стандартів безпеки та якості.
                        Довірте нам свій вантаж – ми гарантуємо надійність, професіоналізм та своєчасне виконання зобов'язань.
                    </p>
                </div>
                <div className="service-image-main-container">
                    <PhotoSlider />
                </div>
            </div>

            <center>
                <OrderCall
                    part1={"Ваш спокій — наша мета. Ми забезпечуємо точність, надійність та"}
                    part2={"індивідуальний підхід, щоб зробити логістику максимально простою для вас"}
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
};

export default Service3Page;
