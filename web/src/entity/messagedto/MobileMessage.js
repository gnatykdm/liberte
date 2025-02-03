import axios from 'axios';

export class MobileMessage {
    constructor() {
        this.apiUrl = 'https://backend:8443/api/message/savemobile';
    }

    async saveMessage(mobileMessageDto) {
        try {
            const response = await axios.post(this.apiUrl, {
                senderName: mobileMessageDto.senderName,
                senderPhone: mobileMessageDto.senderPhone
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