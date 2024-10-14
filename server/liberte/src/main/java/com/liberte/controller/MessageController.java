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
        mailUtil.sendMail(message.getSenderMail(), message.getSenderName(), message.getMessageTheme(),
                message.getMessageContent());

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
        mailUtil.sendMail("gnatykwork@gmail.com", "gnatykwork@gmail.com", "Cрочний Дзвінок - Liber-Site", m.getSenderPhone());

        logger.info("MessageController: Message was sent from: " + m.getSenderName());
        return HttpStatus.OK;
    }
}
