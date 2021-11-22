package com.example.photo_nest.controller;
import com.example.photo_nest.model.Album;
import com.example.photo_nest.model.Photo;
import com.example.photo_nest.repository.AlbumRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/album")

public class AlbumController {

    @Autowired
    private AlbumRepo AlbumRepo;

    @GetMapping("")
    public List<Album> getAllShare() {return AlbumRepo.findAll();
    }

    @PostMapping("")
    public Album createPhoto(@RequestBody Album album) {
        return AlbumRepo.save(album);
    }
}