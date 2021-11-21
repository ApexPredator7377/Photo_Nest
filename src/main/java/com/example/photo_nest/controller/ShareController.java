package com.example.photo_nest.controller;

import com.example.photo_nest.model.Share;
import com.example.photo_nest.model.User;
import com.example.photo_nest.repository.ShareRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}