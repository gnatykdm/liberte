import axios from 'axios';

export class MobileMessage {
    constructor() {
        this.apiUrl = 'https://libertgroup.pl:8080/3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message/savemobile';
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