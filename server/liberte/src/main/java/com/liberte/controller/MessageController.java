package com.liberte.controller;

import com.liberte.model.dto.MessageDto;
import com.liberte.model.dto.MobileMessageDto;
import com.liberte.util.IMailUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;

import static com.liberte.util.MailUtil.readMailFile;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message")
public class MessageController {

    @Autowired
    private IMailUtil mailUtil;
    private final String MAIL_SENDER = "manager@libertgroup.pl";
    private Logger logger = LoggerFactory.getLogger(MessageController.class);

    @PostMapping("/save")
    public HttpStatus sendMessage(@RequestBody MessageDto m) {
        if (m == null || m.getSenderEmail() == null || m.getMessageTheme() == null || m.getMessageContent() == null) {
            logger.error("send: MessageController - Message body can't be null or missing fields");
            return HttpStatus.BAD_REQUEST;
        }

        List<String> mailReceivers = readMailFile("mails.txt");
        String yourEmail = mailReceivers.isEmpty() ? "default_email@example.com" : mailReceivers.get(0);

        String emailContent = generateEmailContent(m);

        try {
            mailUtil.sendMail(MAIL_SENDER, yourEmail, m.getMessageTheme(), emailContent);
        } catch (Exception e) {
            logger.error("Failed to send email: " + e.getMessage());
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }

        logger.info("MessageController: Message was sent from: " + m.getSenderEmail());
        return HttpStatus.OK;
    }

    @PostMapping("/savemobile")
    public HttpStatus sendMessageMobile(@RequestBody MobileMessageDto m) {
        if (m == null || m.getSenderName() == null || m.getSenderPhone() == null) {
            logger.error("send: MessageController - Mobile message body can't be null or missing fields");
            return HttpStatus.BAD_REQUEST;
        }

        List<String> mailReceivers = readMailFile("mails.txt");
        String yourEmail = mailReceivers.isEmpty() ? "default_email@example.com" : mailReceivers.get(0);

        String emailContent = generateMobileEmailContent(m);

        try {
            mailUtil.sendMail(MAIL_SENDER, yourEmail, "Терміновий Дзвінок - Libert-Site", emailContent);
        } catch (Exception e) {
            logger.error("Failed to send mobile email: " + e.getMessage());
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }

        logger.info("MessageController: Mobile message was sent from: " + m.getSenderName());
        return HttpStatus.OK;
    }

    private String generateEmailContent(MessageDto m) {
        StringBuilder sb = new StringBuilder();
        sb.append("---- Нове повідомлення з Libert ----\n\n");
        sb.append("Відправник: ").append(m.getSenderName()).append(" (").append(m.getSenderEmail()).append(")\n");
        sb.append("Тема: ").append(m.getMessageTheme()).append("\n");
        sb.append("Зміст повідомлення:\n").append(m.getMessageContent()).append("\n");
        sb.append("-------------------------------------\n");

        return sb.toString();
    }

    private String generateMobileEmailContent(MobileMessageDto m) {
        StringBuilder sb = new StringBuilder();
        sb.append("---- Нове термінове повідомлення з Libert ----\n\n");
        sb.append("Відправник: ").append(m.getSenderName()).append("\n");
        sb.append("Телефон: ").append(m.getSenderPhone()).append("\n");
        sb.append("-------------------------------------\n");

        return sb.toString();
    }
}
