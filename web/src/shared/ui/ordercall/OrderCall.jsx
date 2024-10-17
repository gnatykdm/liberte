import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import logo from '../../assets/images/libertlogo-removebg-preview.png';
import { MobileMessage } from "../../../entity/messagedto/MobileMessage";
import { MobileMessageDto } from '../../../entity/messagedto/MobileMessageDto';
import './OrderCall.css';

const OrderCall = ({ 
    part1, 
    part2, 
    order_call, 
    order, 
    name_type, 
    tel_type, 
    isDarkMode, 
    messageSuccess, 
    messageError 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [messageStatus, setMessageStatus] = useState('');
    const [statusTimeout, setStatusTimeout] = useState(null);

    const messageService = new MobileMessage();

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setMessageStatus(''); 
        clearTimeout(statusTimeout); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone } = formData;

        const messageDto = new MobileMessageDto(name, phone);
        setFormData({ name: '', phone: '' });

        try {
            await messageService.saveMessage(messageDto);
            setMessageStatus(messageSuccess);

            const timeoutId = setTimeout(() => {
                setMessageStatus('');
            }, 3000);

            setStatusTimeout(timeoutId); 
        } catch (error) {
            console.error("Error sending message:", error);
            setMessageStatus(messageError);

            const timeoutId = setTimeout(() => {
                setMessageStatus('');
            }, 3000);

            setStatusTimeout(timeoutId);
        }
    };

    useEffect(() => {
        return () => clearTimeout(statusTimeout);
    }, [statusTimeout]);

    return (
        <div className={`ordercall ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="libert-logo">
                <img src={logo} alt="Libert logo" />
            </div>

            <div className={`order-call-content ${isDarkMode ? 'dark' : ''}`}>
                <p>{part1} <br /> {part2}.</p>
            </div>

            <div 
                className="order-call-button" 
                onClick={handleModalOpen}
                role="button" 
                aria-pressed={isModalOpen ? "true" : "false"}
                tabIndex="0" 
            >
                <h4>{order}</h4>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal modal-content" role="dialog" aria-modal="true">
                        <button 
                            className="modal-close" 
                            onClick={handleModalClose}
                            aria-label="Close modal"
                        >×</button>
                        <h3>{order_call}</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text-name"
                                name="name"
                                placeholder={name_type}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                aria-label="Name"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder={tel_type}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                aria-label="Phone Number"
                            />
                            <button type="submit" className="order-button">{order}</button>
                        </form>
                        {messageStatus && (
                            <div 
                                className={`sent-message-text-modal ${isDarkMode ? 'dark' : ''}`} 
                                role="alert"
                            >
                                {messageStatus}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderCall;
