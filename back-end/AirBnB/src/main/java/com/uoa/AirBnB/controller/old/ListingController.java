package com.uoa.AirBnB.controller.old;

/*
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/listings")
public class ListingController {

    @Autowired
    ListingService listingService;

    @GetMapping
    public ResponseEntity<List<ListingDto>> returnAllListings(){
        return ResponseEntity.ok().body(listingService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> returnListingById(@PathVariable("id") Long id) throws Exception {
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.findDtoById(id)));
    }

    @PostMapping
    public ResponseEntity<String> createListing(@RequestBody ListingDto listingDto) throws Exception {
        System.out.println(listingDto);
        return ResponseEntity.ok().body(Helpers.convertToJson(listingService.save(listingDto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateListing(@PathVariable("id") Long id, @RequestBody @Nullable ListingDto listingDto) throws Exception {
        if(listingDto!=null)
            return ResponseEntity.ok().body(Helpers.convertToJson(listingService.save(listingDto)));
        else
            return ResponseEntity.ok().body("{\"Status\": \"Listing not found\"}");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteListingById(@PathVariable("id") Long id){
        listingService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
    }
}*/
