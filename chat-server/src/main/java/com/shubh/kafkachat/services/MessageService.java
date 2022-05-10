package com.shubh.kafkachat.services;

import com.shubh.kafkachat.model.ChatRoom;
import com.shubh.kafkachat.model.Message;
import com.shubh.kafkachat.repositories.ChatRoomRepository;
import com.shubh.kafkachat.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatRoomRepository chatRoomRepository;

    @Transactional
    public void addMessage(Message message) {
        message.setId(messageRepository.count() + 1);
        ChatRoom chatroom = chatRoomRepository.getById((long) message.getChatRoom());
        chatroom.addMessage(message);
        messageRepository.save(message);
        chatRoomRepository.save(chatroom);
    }

}
