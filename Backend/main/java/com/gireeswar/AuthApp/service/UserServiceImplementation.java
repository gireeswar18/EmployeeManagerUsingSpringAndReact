package com.gireeswar.AuthApp.service;

import com.gireeswar.AuthApp.dto.LoginDto;
import com.gireeswar.AuthApp.dto.UpdateDto;
import com.gireeswar.AuthApp.dto.UserDto;
import com.gireeswar.AuthApp.model.User;
import com.gireeswar.AuthApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    UserRepository userRepository;

    PasswordEncoder pw = new BCryptPasswordEncoder();

    @Override
    public ResponseEntity<?> register(UserDto userDto) {
        if (userRepository.findByEmail(userDto.getEmail()).isPresent())
        {
            return new ResponseEntity<>("Email already registered!", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setRole(userDto.getRole());
        user.setPassword(pw.encode(userDto.getPassword()));
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> login(LoginDto loginDto) {
        Optional<User> user = userRepository.findByEmail(loginDto.getEmail());
        if (user.isPresent())
        {
            if (pw.matches(loginDto.getPassword(), user.get().getPassword()))
            {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Invalid Credentials", HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<?> getUserById(long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent())
        {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<List<?>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> editUser(long id, UpdateDto updateDto) {

        if (userRepository.existsById(id))
        {
            User user = userRepository.findById(id).get();
            user.setUserName(updateDto.getUserName());
            user.setPhoneNumber(updateDto.getPhoneNumber());
            user.setRole(updateDto.getRole());
            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        }
        return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);

    }

    @Override
    public ResponseEntity<?> deleteUser(long id) {
        if (userRepository.existsById(id))
        {
            userRepository.deleteById(id);
            return new ResponseEntity<>("Deleted user successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
    }
}
