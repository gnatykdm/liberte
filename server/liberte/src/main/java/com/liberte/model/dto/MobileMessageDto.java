package com.liberte.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MobileMessageDto {
    private String senderName;
    private String senderPhone;

    public MobileMessageDto(String senderName, String senderPhone) {
        this.senderName = senderName;
        this.senderPhone = senderPhone;
    }
}
