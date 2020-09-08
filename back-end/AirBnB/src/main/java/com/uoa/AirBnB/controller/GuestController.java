package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.converter.UserConverter;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import com.uoa.AirBnB.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/guest")
@PreAuthorize("hasRole('GUEST') or hasRole('ADMIN')")
public class GuestController {

    @Autowired
    private UserService userService;
    @Autowired
    ListingService listingService;

    @GetMapping("/profile")
    public ResponseEntity<String> returnProfile(Principal principal) throws JsonProcessingException {
        User user = userService.findByUsername(principal.getName());

        return ResponseEntity.ok().body(Helpers.convertToJson(UserConverter.convertToDto(user)));
    }

    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnAllListings(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok().body(listingService.findAll()); // Change to Algorithm
    }

    @GetMapping("/listings/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }
}
