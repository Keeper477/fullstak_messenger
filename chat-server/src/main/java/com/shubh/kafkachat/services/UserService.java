package com.shubh.kafkachat.services;

import com.shubh.kafkachat.model.Message;
import com.shubh.kafkachat.model.Role;
import com.shubh.kafkachat.model.User;
import com.shubh.kafkachat.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void addUser(User user) {
        user.setId(userRepository.count() + 1);
        userRepository.save(user);
    }
    @Transactional
    public User findUser(String username){
        return userRepository.findByUsername(username);
    }

    @Transactional
    public Set<Role> getUserRoles(User user){
        return user.getRoles();
    }
}
