
package com.example.photo_nest.model;

import javax.persistence.*;

@Entity
@Table(name = "photo")
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "photo_ID")
    private long photoId;

    @Column(name = "user_ID")
    private long userId;

    @Column(name = "photo_URL")
    private String photoURL;

    @Column(name = "photo_Date_Created")
    private String photoDateCreated;

    @Column(name = "photo_File_Type")
    private String photoFileType;

    public Photo() {

    }

    public Photo(long userId, String photoURL, String photoDateCreated, String photoFileType) {
        this.userId = userId;
        this.photoURL = photoURL;
        this.photoDateCreated = photoDateCreated;
        this.photoFileType = photoFileType;
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

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public String getPhotoDateCreated() {
        return photoDateCreated;
    }

    public void setPhotoDateCreated(String photoDateCreated) {
        this.photoDateCreated = photoDateCreated;
    }

    public String getPhotoFileType() {
        return photoFileType;
    }

    public void setPhotoFileType(String photoFileType) {
        this.photoFileType = photoFileType;
    }
}
