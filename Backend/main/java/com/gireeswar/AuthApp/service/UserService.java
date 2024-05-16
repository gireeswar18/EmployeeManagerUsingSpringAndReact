package com.gireeswar.AuthApp.service;

import com.gireeswar.AuthApp.dto.LoginDto;
import com.gireeswar.AuthApp.dto.UpdateDto;
import com.gireeswar.AuthApp.dto.UserDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

    ResponseEntity<?> register(UserDto userDto);
    ResponseEntity<?> login (LoginDto loginDto);
    ResponseEntity<?> getUserById(long id);
    ResponseEntity<List<?>> getAllUsers();
    ResponseEntity<?> editUser(long id, UpdateDto updateDto);
    ResponseEntity<?> deleteUser(long id);

}
