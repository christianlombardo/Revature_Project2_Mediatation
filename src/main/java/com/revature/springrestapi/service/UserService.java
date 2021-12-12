package com.revature.springrestapi.service;

import com.revature.springrestapi.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public List<User> getAllUser();
    public User getUserById(Long id);
    public User saveUser(User user);
    public void updateUser(Long id, User user);
    public void deleteUser(Long id);
}
