package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.model.userModel.UserDto;
import com.uoa.AirBnB.model.userModel.UserPostDto;
import com.uoa.AirBnB.service.UserService;
import com.uoa.AirBnB.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/admin")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> returnAllUsers(){
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<String> returnUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(userService.findDtoById(id)));
    }

    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        //String password=userPostDto.getPassword();
        //String encodedPassword=passwordEncoder.encode(password);
        //System.out.println(encodedPassword);
        //userPostDto.setPassword(encodedPassword);
        return ResponseEntity.ok().body(Helpers.convertToJson(userService.save(userPostDto)));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<String> updateUser(@RequestBody @Nullable UserPostDto userPostDto, @PathVariable("id") Long id) throws JsonProcessingException {
        if (userPostDto != null) {
            //String password = userPostDto.getPassword();
            //String encodedPassword = passwordEncoder.encode(password);
            //System.out.println(encodedPassword);
            //userPostDto.setPassword(encodedPassword);
            return ResponseEntity.ok().body(Helpers.convertToJson(userService.save(userPostDto)));
        }
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"User not found\"}");
    }

    /* Post ,Put */

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }


    @GetMapping("/users/{id}/full")
    public ResponseEntity<UserPostDto> findFullUserById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(userService.findFullDtoById(id));
    }
}