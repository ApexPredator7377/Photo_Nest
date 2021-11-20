package com.example.photo_nest.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "user_ID")
    private long userId;

    @Column(name = "first_Name")
    private String firstName;

    @Column(name = "last_Name")
    private String lastName;

    @Column(name = "login_ID")
    private String loginID;

    @Column(name = "password")
    private String userPassword;

    @Column(name = "user_Email")
    private String email;

    @Column(name = "user_Type")
    private char userType;

    public User() {

    }

    public User(String firstName, String lastName, String userPassword, String email, char userType, String loginID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userPassword = userPassword;
        this.email = email;
        this.userType = userType;
        this.loginID = loginID;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char getUserType() {
        return userType;
    }

    public void setUserType(char userType) {
        this.userType = userType;
    }

    public String getLoginID() {return loginID;}

    public void setLoginID(String loginID) {
        this.loginID = loginID;
    }
}
