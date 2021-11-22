package com.example.photo_nest.controller;

import com.example.photo_nest.exception.ResourceNotFoundException;
import com.example.photo_nest.model.User;
import com.example.photo_nest.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with ID: " + id + " ,does not exist."));
        return ResponseEntity.ok(user);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with ID: " + id + ", does not exist."));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setUserType(userDetails.getUserType());
        user.setEmail(userDetails.getEmail());
        user.setUserPassword(userDetails.getUserPassword());
        User updatedUser = userRepo.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(name = "id") Long id){
        User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with ID: " + id + " ,does not exist."));
        userRepo.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("User Removed", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
