package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.bookingModel.BookingPost;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.listingModel.ListingParameters;
import com.uoa.AirBnB.model.messageModel.MessageDto;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.service.*;
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
    @Autowired
    ReviewService reviewService;
    @Autowired
    MessageService messageService;
    @Autowired
    BookingService bookingService;

    @PutMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnWithParameters(@RequestBody ListingParameters listingParameters, Principal principal){
        User user = userService.findByUsername(principal.getName()).get();
        return ResponseEntity.ok().body(listingService.findWithParameters(listingParameters)); //Change to Algorithm
    }

    @GetMapping("/listings/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }

    // -- Reviews --
    @GetMapping("/reviews")
    public ResponseEntity<List<ReviewDto>> returnReviews(Principal principal){
        User user = userService.findByUsername(principal.getName()).get();
        return ResponseEntity.ok().body(reviewService.findByGuest(user.getId()));
    }

    @PostMapping("/reviews")
    public ResponseEntity<String> createReview(@RequestBody ReviewDto reviewDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.save(reviewDto)));
    }

    @PutMapping("/reviews/{id}")
    public ResponseEntity<String> updateReview(@PathVariable("id") Long id, @RequestBody @com.sun.istack.Nullable ReviewDto reviewDto) throws JsonProcessingException {
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

    // -- Messages --
    @GetMapping("/messages")
    public ResponseEntity<List<MessageDto>> returnMessages(Principal principal){
        User user = userService.findByUsername(principal.getName()).get();
        return ResponseEntity.ok().body(messageService.findByGuest(user.getId()));
    }

    @PostMapping("/messages")
    public ResponseEntity<String> createMessage(@RequestBody MessageDto messageDto) throws JsonProcessingException {
        messageDto.setSeen(false);
        messageDto.setWay(false);
        return ResponseEntity.ok().body(Helpers.convertToJson(messageService.save(messageDto)));
    }

    @DeleteMapping("/messages/{id}")
    public ResponseEntity<String> deleteMessageById(@PathVariable("id") Long id){
        messageService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
    @PutMapping("/messages/{id}/seen")
    public ResponseEntity<String> seenMessageWithId(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(messageService.seen(id)));
    }

    // -- Bookings --
    @GetMapping("/bookings")
    public ResponseEntity<List<BookingDto>> returnMyActiveBookings(Principal principal){
        User user = userService.findByUsername(principal.getName()).get();
        return ResponseEntity.ok().body(bookingService.returnMyBookings(user.getId()));
    }

    @PostMapping("/bookings")
    public ResponseEntity<String> createBooking(@RequestBody BookingPost bookingPost, Principal principal) throws JsonProcessingException {
        User user = userService.findByUsername(principal.getName()).get();
        bookingPost.setUserId(user.getId());

        return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.newBooking(bookingPost)));
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<String> deleteBookingById(@PathVariable("id") Long id){
        bookingService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
}