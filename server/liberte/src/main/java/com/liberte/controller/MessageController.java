package com.liberte.controller;

import com.liberte.model.dto.MessageDto;
import com.liberte.model.dto.MobileMessageDto;
import com.liberte.model.entity.MessageEntity;
import com.liberte.model.entity.MessagePhoneEntity;
import com.liberte.service.IMessageService;
import com.liberte.service.IMobileMessageService;
import com.liberte.util.IMailUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message")
public class MessageController {

    @Autowired
    private IMessageService messageService;

    @Autowired
    private IMobileMessageService mobileMessageService;

    @Autowired
    private IMailUtil mailUtil;
    private Logger logger = LoggerFactory.getLogger(MessageController.class);

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/save")
    public HttpStatus sendMessage(@RequestBody MessageDto m) {
        if (m == null) {
            logger.error("send: MessageController - Message body can't be null");
            return HttpStatus.BAD_REQUEST;
        }

        MessageEntity message = new MessageEntity(m.getSenderName(), m.getSenderEmail(), m.getMessageTheme(), m.getMessageContent());
        messageService.saveMessage(message);

        List<String> mailReceivers = readMailFile("mails.txt");
        String yourEmail = mailReceivers.isEmpty() ? "default_email@example.com" : mailReceivers.get(0); // Використання першої адреси

        String emailContent = generateEmailContent(m);
        mailUtil.sendMail(yourEmail, yourEmail, message.getMessageTheme(), emailContent);

        logger.info("MessageController: Message was sent from: " + m.getSenderEmail());
        return HttpStatus.OK;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/savemobile")
    public HttpStatus sendMessageMobile(@RequestBody MobileMessageDto m) {
        if (m == null) {
            logger.error("send: MessageController - Message body can't be null");
            return HttpStatus.BAD_REQUEST;
        }

        MessagePhoneEntity message = new MessagePhoneEntity(m.getSenderName(), m.getSenderPhone());
        mobileMessageService.saveMobileMessage(message);
        List<String> mailReceivers = readMailFile("mails.txt");
        String yourEmail = mailReceivers.isEmpty() ? "default_email@example.com" : mailReceivers.get(0); // Використання першої адреси

        String emailContent = generateMobileEmailContent(m);
        mailUtil.sendMail(yourEmail, yourEmail, "Cрочний Дзвінок - Liber-Site", emailContent);

        logger.info("MessageController: Mobile message was sent from: " + m.getSenderName());
        return HttpStatus.OK;
    }

    private List<String> readMailFile(String file) {
        List<String> mails = new ArrayList<>();
        if (file == null) {
            throw new NullPointerException("File Name can't be null");
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                mails.add(line);
            }
        } catch (IOException e) {
            throw new RuntimeException("Error reading the mail file: " + e.getMessage(), e);
        }
        return mails;
    }

    private String generateEmailContent(MessageDto m) {
        StringBuilder sb = new StringBuilder();
        sb.append("---- Нове повідомлення з Liberte ----\n\n");
        sb.append("Відправник: ").append(m.getSenderName()).append(" (").append(m.getSenderEmail()).append(")\n");
        sb.append("Тема: ").append(m.getMessageTheme()).append("\n");
        sb.append("Зміст повідомлення:\n").append(m.getMessageContent()).append("\n");
        sb.append("-------------------------------------\n");

        return sb.toString();
    }

    private String generateMobileEmailContent(MobileMessageDto m) {
        StringBuilder sb = new StringBuilder();
        sb.append("---- Нове термінове повідомлення з Liberte ----\n\n");
        sb.append("Відправник: ").append(m.getSenderName()).append("\n");
        sb.append("Телефон: ").append(m.getSenderPhone()).append("\n");
        sb.append("-------------------------------------\n");

        return sb.toString();
    }

}
