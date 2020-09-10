package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.converter.UserConverter;
import com.uoa.AirBnB.model.imageModel.ImageDto;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.listingModel.ListingParameters;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.model.userModel.UserDetailsImpl;
import com.uoa.AirBnB.model.userModel.UserPostDto;
import com.uoa.AirBnB.payload.request.LoginRequest;
import com.uoa.AirBnB.payload.response.JwtResponse;
import com.uoa.AirBnB.service.ImageService;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import com.uoa.AirBnB.util.Helpers;
import com.uoa.AirBnB.util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api")
public class UniversalController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    ListingService listingService;
    @Autowired
    ImageService imageService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(),
                userDetails.getUsername(), userDetails.getEmail(), roles,
                userDetails.getFirstName(), userDetails.getLastName(),userDetails.getNumber()));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser() {
        return ResponseEntity.ok().body("{}");
    }

    @PostMapping("/register")
    public ResponseEntity<String> createUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        String password=userPostDto.getPassword();
        String encodedPassword=passwordEncoder.encode(password);
        userPostDto.setPassword(encodedPassword);
        return ResponseEntity.ok().body(Helpers.convertToJson(userService.save(userPostDto)));
    }

    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnWithParameters(@RequestBody ListingParameters listingParameters){
        return ResponseEntity.ok().body(listingService.findWithParameters(listingParameters));
    }
    /*public ResponseEntity<List<ListingDto>> returnAllListings(){
        return ResponseEntity.ok().body(listingService.findAll());
    }*/

    @GetMapping("/listings/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }

    @GetMapping("/profile")
    public ResponseEntity<String> returnProfile(Principal principal) throws JsonProcessingException {

        if(principal!=null) {
            User user = userService.findByUsername(principal.getName());
            return ResponseEntity.ok().body(Helpers.convertToJson(UserConverter.convertToDto(user)));
        }
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"Status\": \"Not a user\"}");
    }


    @PostMapping("images/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        ImageDto img = new ImageDto(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        img = imageService.uploadImage(img);
        return ResponseEntity.ok().body(Helpers.convertToJson(img));
    }

}
