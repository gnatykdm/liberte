package com.liberte.util;

import com.liberte.model.entity.MessageEntity;

public interface IMailUtil {
    void sendMail(String from, String to, String theme, String content);
}
