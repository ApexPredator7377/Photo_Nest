package com.example.photo_nest.controller;
import com.example.photo_nest.model.Photo;
import com.example.photo_nest.model.Share;
import com.example.photo_nest.repository.PhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/photo")

public class PhotoController {

    @Autowired
    private PhotoRepo PhotoRepo;

    @GetMapping("")
    public List<Photo> getAllShare() {return PhotoRepo.findAll();
    }

    @PostMapping("")
    public Photo createPhoto(@RequestBody Photo photo) {
        return PhotoRepo.save(photo);
    }
}