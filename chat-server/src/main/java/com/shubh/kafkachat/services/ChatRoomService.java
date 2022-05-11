package com.shubh.kafkachat.services;

import com.shubh.kafkachat.model.ChatRoom;
import com.shubh.kafkachat.model.Message;
import com.shubh.kafkachat.model.Role;
import com.shubh.kafkachat.repositories.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Transient;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ChatRoomService {
    @Autowired
    private ChatRoomRepository chatRoomRepository;

    @Transactional
    public ChatRoom addChatRoom(ChatRoom chatRoom) {
        chatRoom.setId(chatRoomRepository.count() + 1);
        chatRoomRepository.save(chatRoom);
        return chatRoom;
    }
    @Transient
    public List<Message> getMessages(Long chatRoomId){
        return chatRoomRepository.getById(chatRoomId).getMessageList();
    }
    @Transient
    public List<ChatRoom> getChatRooms(){
        return chatRoomRepository.findAll();
    }
    @Transient
    public ChatRoom getChatRoom(long id){
        return chatRoomRepository.findById(id).get();
    }
}
