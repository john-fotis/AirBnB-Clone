package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.reviewModel.Review;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewConverter {

    @Autowired
    private ListingService listingService;
    private static ListingService listingServiceStatic;

    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    public void setStatic(){
        this.listingServiceStatic=listingService;
        this.userServiceStatic=userService;
    }


    public static ReviewDto convertToDto(Review review){
        ReviewDto reviewDto = new ReviewDto();

        reviewDto.setId(review.getId());
        reviewDto.setComment(review.getComment());
        reviewDto.setDate(review.getDate());
        reviewDto.setRating(review.getRating());

        reviewDto.setListingId(review.getListing().getId());
        reviewDto.setListingTitle(review.getListing().getTitle());
        reviewDto.setUserId(review.getUser().getId());
        reviewDto.setUserName(review.getUser().getUsername());

        return reviewDto;
    }

    public static Review convert(ReviewDto reviewDto){
        Review review = new Review();

        review.setId(reviewDto.getId());
        review.setComment(reviewDto.getComment());
        review.setDate(reviewDto.getDate());
        review.setRating(reviewDto.getRating());

        review.setListing(listingServiceStatic.findById(reviewDto.getListingId()));
        review.setUser(userServiceStatic.findById(reviewDto.getUserId()));

        return review;
    }
}