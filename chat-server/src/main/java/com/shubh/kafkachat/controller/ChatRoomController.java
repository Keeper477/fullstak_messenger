package com.shubh.kafkachat.controller;

import com.shubh.kafkachat.model.ChatRoom;
import com.shubh.kafkachat.model.Message;
import com.shubh.kafkachat.services.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatRoomController {
    @Autowired
    private ChatRoomService chatRoomService;

    @GetMapping("/api/chatRoom/{id}")
    public List<Message> getMessages(@PathVariable int id){
        return chatRoomService.getMessages((long) id);
    }
    @GetMapping("/api/chatRooms")
    public List<ChatRoom> getChatRooms(){
        return chatRoomService.getChatRooms();
    }
    @GetMapping("/api/getChatRoom/{id}")
    public ChatRoom getChatRoom(@PathVariable int id){
        return chatRoomService.getChatRoom(id);
    }
    @PostMapping("/api/chatRoom")
    public ChatRoom addChatRoom(@RequestBody ChatRoom chatRoom){
        return chatRoomService.addChatRoom(chatRoom);
    }
}
