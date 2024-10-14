// OrderCall.js
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import logo from '../../assets/images/libertlogo-removebg-preview.png';
import { MobileMessage } from "../../../entity/messagedto/MobileMessage";
import { MobileMessageDto } from '../../../entity/messagedto/MobileMessageDto';
import './OrderCall.css';

const OrderCall = ({ part1, part2, order_call, order, name_type, tel_type, isDarkMode}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Instance of the message service
    const messageService = new MobileMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Phone:", phone);
        
        const messageDto = new MobileMessageDto(name, phone);

        try {
            await messageService.saveMessage(messageDto);
            console.log("Message sent successfully!");

            setName('');
            setPhone('');
            
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };
    return (
        <div className={`ordercall ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="libert-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`order-call-content ${isDarkMode ? 'dark' : ''}`}>
                <p>{part1} <br /> {part2}.</p>
            </div>
            <div className="order-call-button" onClick={handleModalOpen}>
                <h4>{order}</h4>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal modal-content">
                        <button className="modal-close" onClick={handleModalClose}>×</button>
                        <h3>{order_call}</h3>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text-type" 
                                placeholder={name_type} 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <input 
                                type="tel-type" 
                                placeholder={tel_type} 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="order-button">{order}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderCall;
