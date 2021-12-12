package com.revature.springrestapi.controller;

import com.revature.springrestapi.entity.User;
import com.revature.springrestapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getEmployees(){
        return service.getAllUser();
    }

    @GetMapping("/users/{id}")
    public User getEmployee(@PathVariable("id") Long id){
        return service.getUserById(id);
    }

    @PostMapping("/users")
    public User addEmployee(@RequestBody User user){
        return service.saveUser(user);
    }
}
