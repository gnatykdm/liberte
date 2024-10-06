import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logo from '../../assets/images/libertlogo-removebg-preview.png';
import './OrderCall.css';

const OrderCall = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Имя:', name, 'Телефон:', phone);
        setIsModalOpen(false); 
    };

    return (
        <div className="ordercall">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="libert-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="order-call-content">
                <p>Гарантуємо доставку до вашого місця, щоб ви <br/> могли зосередитися на важливих справах.</p>
            </div>
            <div className="order-call-button" onClick={handleModalOpen}>
                <h4>Замовити дзвінок</h4>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal modal-content">
                        <button className="modal-close" onClick={handleModalClose}>×</button>
                        <h3>Замовити дзвінок</h3>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text-name" 
                                placeholder="Ваше ім'я" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <input 
                                type="tel" 
                                placeholder="Ваш телефон" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="order-button">Замовити</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderCall;
