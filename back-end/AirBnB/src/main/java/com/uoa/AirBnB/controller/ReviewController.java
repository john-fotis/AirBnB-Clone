package com.uoa.AirBnB.controller;

/*
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @GetMapping
    public ResponseEntity<List<ReviewDto>> returnAllListings(){
        return ResponseEntity.ok().body(reviewService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> returnReviewById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<String> createReview(@RequestBody ReviewDto reviewDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.save(reviewDto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateReview(@PathVariable("id") Long id, @RequestBody @Nullable ReviewDto reviewDto) throws JsonProcessingException {
        if(reviewDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(reviewService.save(reviewDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Review not found\"}");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReviewById(@PathVariable("id") Long id){
        reviewService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
}*/
