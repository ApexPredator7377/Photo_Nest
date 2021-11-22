package com.example.photo_nest.controller;
import com.example.photo_nest.exception.ResourceNotFoundException;
import com.example.photo_nest.model.Album;
import com.example.photo_nest.repository.AlbumRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
        Album album = AlbumRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Album with ID: " + id + " ,does not exist."));
        return ResponseEntity.ok(album);
    }

    @PutMapping("{id}")
    public ResponseEntity<Album> updateAlbum(@PathVariable Long id, @RequestBody Album albumDetails) {
        Album album = AlbumRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Album with ID: " + id + ", does not exist."));
        album.setPhotoId(albumDetails.getPhotoId());
        album.setUserId(albumDetails.getUserId());
        album.setAlbumNo(albumDetails.getAlbumNo());
        Album updatedAlbum = AlbumRepo.save(album);
        return ResponseEntity.ok(updatedAlbum);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAlbum(@PathVariable(name = "id") Long id){
        Album album = AlbumRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Album with ID: " + id + " ,does not exist."));
        AlbumRepo.delete(album);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Album Removed", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}