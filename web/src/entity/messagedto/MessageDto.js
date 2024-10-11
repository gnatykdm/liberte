export class MessageDto {
    constructor(senderName, senderEmail, messageTheme, messageContent) {
        this.senderName = senderName;
        this.senderEmail = senderEmail;
        this.messageTheme = messageTheme;
        this.messageContent = messageContent;
    }
}
