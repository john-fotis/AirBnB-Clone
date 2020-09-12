package com.uoa.AirBnB.controller.old;

/*
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;
    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<BookingDto>> returnAllBookings(){
        return ResponseEntity.ok().body(bookingService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> returnBookingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(bookingService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<String> createBooking(@RequestBody BookingPost bookingPost, Principal principal){
        User user = userService.findByUsername(principal.getName());
        bookingPost.setUserId(user.getId());
        bookingService.newBooking(bookingPost);
        return ResponseEntity.ok().body("{}");
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
}*/
