package com.gireeswar.AuthApp.dto;

import lombok.Data;

@Data
public class UserDto {

    private long id;
    private String userName;
    private String email;
    private long phoneNumber;
    private String role;
    private String password;

}
