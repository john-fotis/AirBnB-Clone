package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.converter.UserConverter;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.model.userModel.UserDto;
import com.uoa.AirBnB.model.userModel.UserPostDto;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import com.uoa.AirBnB.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    ListingService listingService;

    @GetMapping("/profile")
    public ResponseEntity<String> returnProfile(Principal principal) throws JsonProcessingException {
        User user = userService.findByUsername(principal.getName());

        return ResponseEntity.ok().body(Helpers.convertToJson(UserConverter.convertToDto(user)));
    }

    // ----------------- Users -----------------------

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> returnAllUsers(){
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<String> returnUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(userService.findDtoById(id)));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<String> updateUser(@RequestBody @Nullable UserPostDto userPostDto, @PathVariable("id") Long id) throws JsonProcessingException {
        if (userPostDto != null) {
            String password = userPostDto.getPassword();
            String encodedPassword = passwordEncoder.encode(password);
            //System.out.println(encodedPassword);
            userPostDto.setPassword(encodedPassword);
            return ResponseEntity.ok().body(Helpers.convertToJson(userService.save(userPostDto)));
        }
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"User not found\"}");
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }


    @GetMapping("/users/{id}/full")
    public ResponseEntity<UserPostDto> findFullUserById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(userService.findFullDtoById(id));
    }

    // ----------------- Listings -----------------------

    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnAllListings(){
        return ResponseEntity.ok().body(listingService.findAll());
    }

    @GetMapping("/listings/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }

    @PostMapping("/listings")
    public ResponseEntity<String> createListing(@RequestBody ListingDto listingDto) throws Exception {
        System.out.println(listingDto);
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.save(listingDto)));
    }

    @PutMapping("/listings/{id}")
    public ResponseEntity<String> updateListing(@PathVariable("id") Long id, @RequestBody @com.sun.istack.Nullable ListingDto listingDto) throws Exception {
        if(listingDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(listingService.save(listingDto)));
        else
            return ResponseEntity.ok().body("{\"Status\": \"Listing not found\"}");
    }

    @DeleteMapping("/listings/{id}")
    public ResponseEntity<String> deleteListingById(@PathVariable("id") Long id){
        listingService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
}