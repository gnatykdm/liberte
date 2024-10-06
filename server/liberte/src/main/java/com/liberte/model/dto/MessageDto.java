package com.liberte.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MessageDto {
    private String senderEmail;
    private String messageTheme;
    private String messageContent;

    public MessageDto(String senderEmail, String messageTheme,  String messageContent) {
        if (isMail(senderEmail)) {
            this.senderEmail = senderEmail;
        }
        this.messageTheme = messageTheme;
        this.messageContent = messageContent;
    }

    private boolean isMail(String mail) {
        if (mail.isEmpty()) {
            throw new NullPointerException("The Mail Can't be Emoty");
        }
        return mail.matches("\\w+@\\w+.\\w+");
    }
}
