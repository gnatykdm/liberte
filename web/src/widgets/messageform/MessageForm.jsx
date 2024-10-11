import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './MessageForm.css';
import { MessageRequest } from '../../entity/messagedto/MessageRequest';
import { MessageDto } from '../../entity/messagedto/MessageDto'; 

const MessageForm = ({ header, name_type, email_type, message_content, message_type, send }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Instance of the message service
    const messageService = new MessageRequest();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Имя:", name);
        console.log("Email:", email);
        console.log("Тема:", subject);
        console.log("Сообщение:", message);

        // Create a new MessageDto object with form data
        const messageDto = new MessageDto(name, email, subject, message);

        try {
            // Call the saveMessage method to send the message to the server
            await messageService.saveMessage(messageDto);
            console.log("Message sent successfully!");

            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="message-form">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="message-content">
                {header}
            </div>
            <div className="forward-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder={name_type}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder={email_type} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder={message_content} 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required 
                    />
                    <textarea 
                        name="content" 
                        placeholder={message_type}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">{send}</button>
                </form>
            </div>
        </div>
    );
};

export default MessageForm;
