package com.shubh.kafkachat.services;

import com.shubh.kafkachat.model.Role;
import com.shubh.kafkachat.model.User;
import com.shubh.kafkachat.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    public void addRole(Role role) {
        role.setId(roleRepository.count() + 1);
        roleRepository.save(role);
    }
    @Transactional
    public Role findRole(String rolename){
        return roleRepository.findByName(rolename);
    }
}
