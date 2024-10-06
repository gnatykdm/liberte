package com.liberte.repository;

import com.liberte.model.entity.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMessageRepository extends JpaRepository<MessageEntity, Long> {
    @Query("select m from MessageEntity m where m.senderMail = ?1")
    List<MessageEntity> getMessageBySenderMail(String m);
}