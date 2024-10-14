package com.liberte.service;

import com.liberte.model.entity.MessagePhoneEntity;
import com.liberte.repository.IMobileMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MobileMessageService implements IMobileMessageService {

    @Autowired
    private IMobileMessageRepository mobileMessageRepository;
    private Logger logger = LoggerFactory.getLogger(MobileMessageService.class);

    @Override
    public void saveMobileMessage(MessagePhoneEntity m) {
        if (m == null) {
            logger.error("MobileMessageService: Mobile Message can't be empty");
        }
        mobileMessageRepository.save(m);
        logger.info("MobileMessageService: Message was saved");
    }
}
