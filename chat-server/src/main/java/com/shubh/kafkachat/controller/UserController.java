package com.shubh.kafkachat.controller;

import com.shubh.kafkachat.model.Role;
import com.shubh.kafkachat.model.User;
import com.shubh.kafkachat.services.RoleService;
import com.shubh.kafkachat.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @GetMapping("/api/userRoles/{username}")
    public User getRoles(@PathVariable String username){
        User user = userService.findUser(username);
        return user;
    }
    @PostMapping("/api/login")
    public User login(@RequestBody Map<String, String> userData){
        User user = userService.findUser(userData.get("username"));
        if (user == null){
            return new User();
        }
        if (Objects.equals(user.getPassword(), userData.get("password"))){
            return user;
        }
        return new User();
    }
    @PostMapping("/api/registration")
    public User registration(@RequestBody Map<String, String> userData){
        User user = userService.findUser(userData.get("username"));
        Set<Role> roleSet = new HashSet<>();
        if (user != null || Objects.equals(userData.get("password"), "")){
            return new User();
        }
        User newUser = new User();
        newUser.setUsername(userData.get("username"));
        newUser.setPassword(userData.get("password"));
        if (Objects.equals("yes", userData.get("developer"))){
            roleSet.add(roleService.findRole("developer"));
        }
        if (Objects.equals("yes", userData.get("tester"))){
            roleSet.add(roleService.findRole("tester"));
        }
        if (Objects.equals("yes", userData.get("admin"))){
            roleSet.add(roleService.findRole("admin"));
        }
        newUser.setRoles(roleSet);
        userService.addUser(newUser);
        return newUser;
    }
}
