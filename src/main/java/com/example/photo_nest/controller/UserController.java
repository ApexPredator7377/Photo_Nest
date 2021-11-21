package com.example.photo_nest.controller;

import com.example.photo_nest.model.User;
import com.example.photo_nest.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")

public class UserController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return userRepo.save(user);
    }
}
