import axios from 'axios';

export class MessageRequest {
    constructor() {
        this.apiUrl = 'http://libertgroup.pl:8080/3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message/save';
    }

    async saveMessage(messageDto) {
        try {
            const response = await axios.post(this.apiUrl, {
                senderName: messageDto.senderName,
                senderEmail: messageDto.senderEmail,
                messageTheme: messageDto.messageTheme,
                messageContent: messageDto.messageContent
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, 
            });

            console.log('Message saved successfully:', response.data);
            return response.data; 
        } catch (error) {
            console.error('Error saving message:', error.response ? error.response.data : error.message);
            throw error; 
        }
    }
}
