
package com.example.photo_nest.model;

import javax.persistence.*;

@Entity
@Table(name = "album")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "album_ID")
    private long albumId;

    @Column(name = "photo_ID")
    private long photoId;

    @Column(name = "user_ID")
    private long userId;

    public Album() {

    }

    public Album(long photoId, long userId) {
        this.photoId = photoId;
        this.userId = userId;
    }

    public long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(long albumId) {
        this.albumId = albumId;
    }

    public long getPhotoId() {
        return photoId;
    }

    public void setPhotoId(long photoId) {
        this.photoId = photoId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}

