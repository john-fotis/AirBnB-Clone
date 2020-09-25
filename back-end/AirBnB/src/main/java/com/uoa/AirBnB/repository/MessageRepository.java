package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.messageModel.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByListingIdAndWay(Long id, Boolean way);
    List<Message> findByGuestIdAndWayAndSeen(Long id, Boolean way, Boolean seen);
}
