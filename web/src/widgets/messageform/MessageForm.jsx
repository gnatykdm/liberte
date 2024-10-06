import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './MessageForm.css';

const MessageForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить логику для отправки данных формы
        console.log("Имя:", name);
        console.log("Email:", email);
        console.log("Тема:", subject);
        console.log("Сообщение:", message);
        
        // Очистим поля после отправки
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="message-form">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="message-content">
                Надішліть нам повідомлення
            </div>
            <div className="forward-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Ваше ім'я" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Електронна пошта" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Тема Повідомлення" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required 
                    />
                    <textarea 
                        name="content" 
                        placeholder="Повідомлення..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">Надіслати</button>
                </form>
            </div>
        </div>
    );
};

export default MessageForm;
