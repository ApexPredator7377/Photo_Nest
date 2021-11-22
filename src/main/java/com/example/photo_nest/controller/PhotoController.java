package com.example.photo_nest.controller;
import com.example.photo_nest.exception.ResourceNotFoundException;
import com.example.photo_nest.model.Photo;
import com.example.photo_nest.repository.PhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/photo")

public class PhotoController {

    @Autowired
    private PhotoRepo PhotoRepo;

    @GetMapping("")
    public List<Photo> getAllPhoto() {return PhotoRepo.findAll();
    }

    @PostMapping("")
    public Photo createPhoto(@RequestBody Photo photo) {
        return PhotoRepo.save(photo);
    }

    @GetMapping("{id}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable Long id) {
        Photo photo = PhotoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Photo with ID: " + id + " ,does not exist."));
        return ResponseEntity.ok(photo);
    }

    @PutMapping("{id}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable Long id, @RequestBody Photo userDetails) {
        Photo user = PhotoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Photo with ID: " + id + ", does not exist."));
        user.setPhotoURL(userDetails.getPhotoURL());
        user.setPhotoDateCreated(userDetails.getPhotoDateCreated());
        user.setPhotoFileType(userDetails.getPhotoFileType());
        user.setUserId(userDetails.getUserId());
        Photo updatedPhoto = PhotoRepo.save(user);
        return ResponseEntity.ok(updatedPhoto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deletePhoto(@PathVariable(name = "id") Long id){
        Photo photo = PhotoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Photo with ID: " + id + " ,does not exist."));
        PhotoRepo.delete(photo);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Photo Removed", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}