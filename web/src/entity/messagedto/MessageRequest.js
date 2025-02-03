import axios from 'axios';

export class MessageRequest {
    constructor() {
        this.apiUrl = '/api/message/save';
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