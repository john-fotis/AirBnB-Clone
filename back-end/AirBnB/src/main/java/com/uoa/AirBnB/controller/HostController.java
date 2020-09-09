package com.uoa.AirBnB.controller;

import com.sun.istack.Nullable;
import com.uoa.AirBnB.model.listingModel.ListingDto;
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
@RequestMapping("/api/host")
@PreAuthorize("hasRole('HOST') or hasRole('ADMIN')")
public class HostController {

    @Autowired
    private UserService userService;
    @Autowired
    ListingService listingService;
    @Autowired
    ReviewService reviewService;

    // ----------------- Listings -----------------------

    @GetMapping("/listings")
    public ResponseEntity<List<ListingDto>> returnAllListings(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok().body(listingService.findByHost(user.getId()));
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
    public ResponseEntity<String> updateListing(@PathVariable("id") Long id, @RequestBody @Nullable ListingDto listingDto) throws Exception {
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

    // -- Reviews --
    @GetMapping("/reviews")
    public ResponseEntity<List<ReviewDto>> returnReviews(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok().body(reviewService.findByHost(user.getId()));
    }
}
