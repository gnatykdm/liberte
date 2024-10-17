import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './MessageForm.css';
import { MessageRequest } from '../../entity/messagedto/MessageRequest';
import { MessageDto } from '../../entity/messagedto/MessageDto';

const MessageForm = ({ header, name_type, email_type, message_content, message_type, send, isDarkMode, messageSending, messageOk, messageError }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [messageStatus, setMessageStatus] = useState('');
    const [isMessageSent, setIsMessageSent] = useState(false);

    const messageService = new MessageRequest();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;
        const messageDto = new MessageDto(name, email, subject, message);

        // Display "sending" status
        setMessageStatus(messageSending);

        // Clear the form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });

        try {
            await messageService.saveMessage(messageDto);
            console.log("Message sent successfully!");

            // Display "message sent" status and hide it after 3 seconds
            setMessageStatus(messageOk);
            setIsMessageSent(true);

            setTimeout(() => {
                setIsMessageSent(false);
                setMessageStatus('');
            }, 3000);

        } catch (error) {
            console.error("Error sending message:", error);
            setMessageStatus(messageError);

            // Reset message status after 3 seconds
            setTimeout(() => {
                setMessageStatus('');
            }, 3000);
        }
    };

    return (
        <div className={`message-form ${isDarkMode ? 'dark' : ''}`}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className={`message-content ${isDarkMode ? 'dark' : ''}`}>
                {header}
            </div>
            <div className={`forward-form ${isDarkMode ? 'dark' : ''}`}>
                <form onSubmit={handleSubmit} className={`${isDarkMode ? 'dark' : ''}`}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder={name_type}
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className={`${isDarkMode ? 'dark' : ''}`}
                        aria-label="Name"
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder={email_type} 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className={`${isDarkMode ? 'dark' : ''}`}
                        aria-label="Email"
                    />
                    <input 
                        type="text" 
                        name="subject"
                        placeholder={message_content} 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                        className={`${isDarkMode ? 'dark' : ''}`}
                        aria-label="Subject"
                    />
                    <textarea 
                        name="message" 
                        placeholder={message_type}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`${isDarkMode ? 'dark' : ''}`}
                        aria-label="Message"
                    />
                    <button type="submit" className="submit-button">{send}</button>

                    {/* Status message */}
                    {messageStatus && <div className={`sent-message-text ${isDarkMode ? 'dark' : ''}`}>{messageStatus}</div>}
                </form>
            </div>
        </div>
    );
};

export default MessageForm;
