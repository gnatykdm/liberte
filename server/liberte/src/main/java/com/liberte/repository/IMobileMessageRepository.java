package com.liberte.repository;

import com.liberte.model.entity.MessagePhoneEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMobileMessageRepository extends JpaRepository<MessagePhoneEntity, Long> {
}
