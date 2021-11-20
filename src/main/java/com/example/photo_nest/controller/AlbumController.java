package com.example.photo_nest.controller;
import com.example.photo_nest.model.Album;
import com.example.photo_nest.repository.AlbumRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/album")

public class AlbumController {

    @Autowired
    private AlbumRepo AlbumRepo;

    @GetMapping("")
    public List<Album> getAllShare() {return AlbumRepo.findAll();
    }
}