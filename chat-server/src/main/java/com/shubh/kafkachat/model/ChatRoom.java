package com.shubh.kafkachat.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chat_room")
@Getter
@Setter
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany
    @JsonIgnore
    private List<Message> messageList = new ArrayList<>();

    @ManyToMany
    private List<Role> roleList = new ArrayList<>();

    public void addMessage(Message message){
        messageList.add(message);
    }

    public void addUser(Role role){
        roleList.add(role);
    }
}
