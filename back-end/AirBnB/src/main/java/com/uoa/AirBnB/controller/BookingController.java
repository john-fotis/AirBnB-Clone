package com.uoa.AirBnB.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sun.istack.Nullable;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.service.BookingService;
import com.uoa.AirBnB.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @GetMapping
    public ResponseEntity<List<BookingDto>> returnAllBookings(){
        return ResponseEntity.ok().body(bookingService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> returnBookingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<String> createBooking(@RequestBody BookingDto bookingDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.save(bookingDto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateBooking(@PathVariable("id") Long id, @RequestBody @Nullable BookingDto bookingDto) throws JsonProcessingException {
        if(bookingDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.save(bookingDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Booking not found\"}");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBookingById(@PathVariable("id") Long id){
        bookingService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
}