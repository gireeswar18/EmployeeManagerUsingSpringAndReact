package com.gireeswar.AuthApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "userTable")
@Entity
@Data

public class User {

    @Id
    @GeneratedValue // Auto
    private long id;

    private String userName;
    private String email;
    private long phoneNumber;
    private String role;
    private String password;

}