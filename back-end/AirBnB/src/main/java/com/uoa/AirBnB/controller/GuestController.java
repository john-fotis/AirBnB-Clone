package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.listingModel.ListingParameters;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.ReviewService;
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
    @Autowired
    ReviewService reviewService;

    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnWithParameters(@RequestBody ListingParameters listingParameters, Principal principal){
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok().body(listingService.findWithParameters(listingParameters)); //Change to Algorithm
    }
    /*public ResponseEntity<List<ListingDto>> returnAllListings(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok().body(listingService.findAll()); // Change to Algorithm
    }*/

    @GetMapping("/listings/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }

    // -- Reviews --
    @GetMapping("/reviews")
    public ResponseEntity<List<ReviewDto>> returnReviews(Principal principal){
        User user = userService.findByUsername(principal.getName());
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
}
