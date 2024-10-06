package com.liberte.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "mails_content")
public class MessageEntity implements Cloneable {
    @Id
    @Column(name = "message_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @Column(name = "sender_mail", nullable = false)
    private String senderMail;

    @Column(name = "message_theme", nullable = false)
    private String messageTheme;

    @Column(name = "message_content", nullable = false)
    private String messageContent;

    @Column(name = "sent_time", nullable = false)
    private LocalDateTime sentTime;

    public MessageEntity(String senderMail, String messageTheme, String messageContent) {
        if (messageContent == null || senderMail == null) {
            throw new NullPointerException("Mail data can't be Empty");
        }

        if (isMail(senderMail)) {
            this.messageTheme = messageTheme;
            this.senderMail = senderMail;
            this.messageContent = messageContent;
            this.sentTime = LocalDateTime.now();
        }

    }

    private boolean isMail(String mail) {
        if (mail == null) {
            throw new NullPointerException("Mail can't be null");
        }
        return mail.matches("\\w+@\\w+.\\w+");
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) return true;
        if (! (o instanceof MessageEntity)) return false;
        MessageEntity m = (MessageEntity) o;
        return messageId.equals(m.messageId) &&
                senderMail.equals(m.senderMail) &&
                messageContent.equals(m.messageContent);
    }

    @Override
    public int hashCode() {
        int result = Integer.hashCode(Math.toIntExact(messageId));
        result = 31 * result + (senderMail != null ? senderMail.hashCode() : 0);
        result = 31 * result + (messageContent != null ? messageContent.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "MessageEntity{" +
                "messageId=" + messageId +
                ", senderMail='" + senderMail + '\'' +
                ", messageContent='" + messageContent + '\'' +
                ", sentTime=" + sentTime +
                '}';
    }

    @Override
    public MessageEntity clone() throws CloneNotSupportedException {
        return (MessageEntity) super.clone();
    }
}
