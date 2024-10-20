package com.liberte.util;

import jakarta.annotation.PostConstruct;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@Service
public class MailUtil implements IMailUtil {

    @Value("${mail.smtp.host}")
    private String HOST;

    @Value("${mail.smtp.username}")
    private String USERNAME;

    @Value("${mail.smtp.password}")
    private String PASSWORD;

    private List<String> mailReceivers;
    private final Properties prop = new Properties();
    private final Logger logger = LoggerFactory.getLogger(MailUtil.class);

    @PostConstruct
    public void init() {
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        mailReceivers = readMailFile("mails.txt");
    }

    @Override
    public void sendMail(String from, String to, String theme, String content) {
        if (mailReceivers == null || mailReceivers.isEmpty()) {
            logger.error("No mail receivers loaded. Cannot send emails.");
            return;
        }

        Session session = Session.getInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(USERNAME, PASSWORD);
            }
        });

        try {
            logger.info("Sending email from: " + from);

            for (String recipient : mailReceivers) {
                MimeMessage message = new MimeMessage(session);
                message.setFrom(new InternetAddress(from));
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
                message.setSubject(theme);
                message.setText(content);
                message.setSentDate(new Date());

                logger.info("Sending email to: " + recipient);
                Transport.send(message);
                logger.info("Email sent successfully to: " + recipient);
            }
        } catch (MessagingException e) {
            logger.error("Failed to send email: " + e.getMessage(), e);
        }
    }

    private static List<String> readMailFile(String file) {
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
}
