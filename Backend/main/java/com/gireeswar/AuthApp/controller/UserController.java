package com.gireeswar.AuthApp.controller;

import com.gireeswar.AuthApp.dto.LoginDto;
import com.gireeswar.AuthApp.dto.UpdateDto;
import com.gireeswar.AuthApp.dto.UserDto;
import com.gireeswar.AuthApp.service.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin

public class UserController {

    @Autowired
    UserServiceImplementation userService;

    @PostMapping("/register")
    public ResponseEntity<?> register (@RequestBody UserDto userDto)
    {
        return userService.register(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login (@RequestBody LoginDto loginDto)
    {
        return userService.login(loginDto);
    }

    @GetMapping("getUserById/{id}")
    public ResponseEntity<?> getUserById (@PathVariable long id)
    {
        return userService.getUserById(id);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<?>> getAllUsers ()
    {
        return userService.getAllUsers();
    }

    @PutMapping("/editUser/{id}")
    public ResponseEntity<?> editUser (@PathVariable long id, @RequestBody UpdateDto updateDto)
    {
        return userService.editUser(id, updateDto);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser (@PathVariable long id)
    {
        return userService.deleteUser(id);
    }

}
