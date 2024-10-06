package com.liberte.controller;

import com.liberte.model.dto.MessageDto;
import com.liberte.model.entity.MessageEntity;
import com.liberte.service.IMessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("3i7Xry7tEKF5ZtdzT8Wn1zXToUABR5JpjBpSfxmn8asEaBmoblFeS4yIfrHEWvk5/api/message")
public class MessageController {

    @Autowired
    private IMessageService messageService;
    private Logger logger = LoggerFactory.getLogger(MessageController.class);

    @PostMapping("/save")
    public HttpStatus sendMessage(@RequestBody MessageDto m) {
        if (m == null) {
            logger.error("send: MessageController - Message body can't be null");
            return HttpStatus.BAD_REQUEST;
        }

        MessageEntity message = new MessageEntity(m.getSenderEmail(), m.getMessageTheme(), m.getMessageContent());

        messageService.saveMessage(message);
        messageService.sendMessage(message);

        logger.info("MessageController: Message was sent from: " + m.getSenderEmail());
        return HttpStatus.OK;
    }
}
