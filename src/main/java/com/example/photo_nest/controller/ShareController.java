package com.example.photo_nest.controller;

import com.example.photo_nest.exception.ResourceNotFoundException;
import com.example.photo_nest.model.Share;
import com.example.photo_nest.repository.ShareRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/share")

public class ShareController {

    @Autowired
    private ShareRepo ShareRepo;

    @GetMapping("")
    public List<Share> getAllShare() {return ShareRepo.findAll();
    }

    @PostMapping("")
    public Share createShare(@RequestBody Share share) {
        return ShareRepo.save(share);
    }

    @GetMapping("{id}")
    public ResponseEntity<Share> getShareById(@PathVariable Long id) {
        Share share = ShareRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Share with ID: " + id + " ,does not exist."));
        return ResponseEntity.ok(share);
    }

    @PutMapping("{id}")
    public ResponseEntity<Share> updateShare(@PathVariable Long id, @RequestBody Share shareDetails) {
        Share share = ShareRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Share with ID: " + id + ", does not exist."));
        share.setUserId_origin(shareDetails.getUserId_origin());
        share.setUserId_destination(shareDetails.getUserId_destination());
        share.setPhotoID(shareDetails.getPhotoID());
        Share updatedShare = ShareRepo.save(share);
        return ResponseEntity.ok(updatedShare);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deleteShare(@PathVariable(name = "id") Long id){
        Share share = ShareRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Share with ID: " + id + " ,does not exist."));
        ShareRepo.delete(share);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Share Removed", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}