import axios from 'axios';
import { MessageDto } from './MessageDto'; 

export class MessageRequest {
    constructor() {
        this.apiUrl = 'http://localhost:8080/3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message/save';
    }

    async saveMessage(messageDto) {
        try {
            const response = await axios.post(this.apiUrl, {
                senderName: messageDto.senderName,
                senderEmail: messageDto.senderEmail,
                messageTheme: messageDto.messageTheme,
                messageContent: messageDto.messageContent
            });

            console.log('Message saved successfully:', response.data);
            return response.data; 
        } catch (error) {
            console.error('Error saving message:', error.response ? error.response.data : error.message);
            throw error; 
        }
    }
}