package com.liberte.service;

import com.liberte.model.entity.MessageEntity;
import com.liberte.repository.IMessageRepository;
import com.liberte.util.IMailUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MessageService implements IMessageService {

    private final Logger logger = LoggerFactory.getLogger(MessageService.class);

    @Autowired
    private final IMessageRepository messageRepository;

    @Autowired
    public MessageService(IMessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public void saveMessage(MessageEntity m) {
        if (m == null) {
            logger.error("saveMessage: MessageEntity can't be null");
        }
        messageRepository.save(m);
    }

    @Override
    public List<MessageEntity> getMessageBySenderMail(String mail) {
        if (mail == null || mail.isEmpty()) {
            logger.error("getMessageBySenderMail: Sender mail can't be null or empty");
            return null;
        }
        return messageRepository.getMessageBySenderMail(mail);
    }

    @Override
    public List<MessageEntity> getAllMessages() {
        return messageRepository.findAll();
    }
}
