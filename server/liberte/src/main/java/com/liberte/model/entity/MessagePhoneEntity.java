package com.liberte.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "_phone_content")
public class MessagePhoneEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long phoneId;

    @Column(name = "_name", nullable = false)
    private String phoneName;

    @Column(name = "_phone", nullable = false)
    private String phoneNumber;

    @Column(name = "_time", nullable = false)
    private LocalDateTime phoneTime;

    public MessagePhoneEntity(String phoneName, String phoneNumber) {
        if (phoneNumber == null || phoneNumber == null) {
            throw new NullPointerException("Phone data can't be null");
        }

        this.phoneName = phoneName;
        this.phoneNumber = phoneNumber;
        this.phoneTime = LocalDateTime.now();
    }
}