package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.messageModel.MessageDto;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.model.superModel.ReturnEverything;
import com.uoa.AirBnB.model.userModel.UserDto;
import com.uoa.AirBnB.model.userModel.UserPostDto;
import com.uoa.AirBnB.service.*;
import com.uoa.AirBnB.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    ReviewService reviewService;
    @Autowired
    MessageService messageService;
    @Autowired
    BookingService bookingService;
    @Autowired
    SuperService superService;

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

    @PutMapping("/users/{id}/approve")
    public ResponseEntity<String> approveUser(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(userService.approve(id)));

    }
    // --------------------------- Listings ----------------------------
    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnAllListings() {
        return ResponseEntity.ok().body(listingService.findAll());
    }


    // --------------------------- Reviews ----------------------------

    @GetMapping("/reviews")
    public ResponseEntity<List<ReviewDto>> returnAllReviews(){
        return ResponseEntity.ok().body(reviewService.findAll());
    }

    @GetMapping("/reviews/{id}")
    public ResponseEntity<String> returnReviewById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.findById(id)));
    }

    @PostMapping("/reviews")
    public ResponseEntity<String> createReview(@RequestBody ReviewDto reviewDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.save(reviewDto)));
    }

    @PutMapping("/reviews/{id}")
    public ResponseEntity<String> updateReview(@PathVariable("id") Long id, @RequestBody @Nullable ReviewDto reviewDto) throws JsonProcessingException {
        if(reviewDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.save(reviewDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Review not found\"}");
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<String> deleteReviewById(@PathVariable("id") Long id){
        reviewService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }

    // --------------------------- Messages ----------------------------

    @GetMapping("/messages")
    public ResponseEntity<List<MessageDto>> returnAllMessages(){
        return ResponseEntity.ok().body(messageService.findAll());
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity<String> returnMessageById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(messageService.findById(id)));
    }

    @PostMapping("/messages")
    public ResponseEntity<String> createMessage(@RequestBody MessageDto messageDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(messageService.save(messageDto)));
    }

    @PutMapping("/messages/{id}")
    public ResponseEntity<String> updateMessage(@PathVariable("id") Long id, @RequestBody @Nullable MessageDto messageDto) throws JsonProcessingException {
        if(messageDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(messageService.save(messageDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Message not found\"}");
    }

    @DeleteMapping("/messages/{id}")
    public ResponseEntity<String> deleteMessageById(@PathVariable("id") Long id){
        messageService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }

    // --------------------------- Bookings ----------------------------
    @GetMapping("/bookings")
    public ResponseEntity<List<BookingDto>> returnAllBookings(){
        return ResponseEntity.ok().body(bookingService.findAll());
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<String> returnBookingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.findById(id)));
    }

    @PutMapping("/bookings/{id}")
    public ResponseEntity<String> updateBooking(@PathVariable("id") Long id, @RequestBody @com.sun.istack.Nullable BookingDto bookingDto) throws JsonProcessingException {
        if(bookingDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.save(bookingDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Booking not found\"}");
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<String> deleteBookingById(@PathVariable("id") Long id){
        bookingService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }

    // --------------------------- Super!!! ----------------------------
    @GetMapping("/extractEverything")
    public ResponseEntity<ReturnEverything> returnEverythingToTheAdmin(){
        return ResponseEntity.ok().body(superService.returnEverything());
    }

}