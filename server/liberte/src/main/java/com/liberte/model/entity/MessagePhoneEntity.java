package com.liberte.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="phone_message")
public class MessagePhoneEntity {
    @Id
    @Column(name="phone_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long phoneId;

    @Column(name="customer_name", nullable = false)
    private String customerName;

    @Column(name="phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "phone_call_time", nullable = false)
    private LocalDateTime phoneTime = LocalDateTime.now();

    public MessagePhoneEntity(String customerName, String phoneNumber) {
        if (customerName != null && phoneNumber != null) {
            this.customerName = customerName;
            this.phoneNumber = phoneNumber;
        }
        throw new NullPointerException("MessagePhoneEntity | Message data can't be null");
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        MessagePhoneEntity that = (MessagePhoneEntity) object;
        return Objects.equals(phoneId, that.phoneId) && Objects.equals(customerName, that.customerName) && Objects.equals(phoneNumber, that.phoneNumber) && Objects.equals(phoneTime, that.phoneTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(phoneId, customerName, phoneNumber, phoneTime);
    }

    @Override
    public String toString() {
        return "MessagePhoneEntity{" +
                "phoneId=" + phoneId +
                ", customerName='" + customerName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", phoneTime=" + phoneTime +
                '}';
    }
}
