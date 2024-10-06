package com.liberte.service;

import com.liberte.model.entity.MessageEntity;

import java.util.List;

public interface IMessageService {
    void saveMessage(MessageEntity m);
    void sendMessage(MessageEntity m);
    List<MessageEntity> getMessageBySenderMail(String mail);
    List<MessageEntity> getAllMessages();
}
