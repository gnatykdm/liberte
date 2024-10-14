package com.liberte.service;

import com.liberte.model.entity.MessagePhoneEntity;
import org.springframework.stereotype.Service;

@Service
public interface IMobileMessageService {
    void saveMobileMessage(MessagePhoneEntity m);
}
