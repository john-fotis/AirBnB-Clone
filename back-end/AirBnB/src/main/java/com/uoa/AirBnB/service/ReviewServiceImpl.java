package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.ReviewConverter;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.reviewModel.Review;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.repository.ListingRepository;
import com.uoa.AirBnB.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ListingRepository listingRepository;

    @Override
    public ReviewDto findById(Long id) throws Exception {
        Review review;

        try{
            review=reviewRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Review not found", nsee.getCause());
        }

        return ReviewConverter.convertToDto(review);
    }

    @Override
    public List<ReviewDto> findAll() {
        return reviewRepository.findAll()
                .stream()
                .map(ReviewConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReviewDto> findByHost(Long id) {
        return reviewRepository.findAllByListingHostId(id)
                .stream()
                .map(ReviewConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReviewDto> findByGuest(Long id) {
        return reviewRepository.findAllByUserId(id)
                .stream()
                .map(ReviewConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ReviewDto save(ReviewDto reviewDto) {

        Review review = ReviewConverter.convert(reviewDto);

        review = reviewRepository.save(review);

        System.out.println("Review added or updated");

        Listing listing =listingRepository.findById(review.getListing().getId()).get();
        double newGpa = (listing.getAverageRating()*listing.getNumOfReviews() + review.getRating())/(listing.getNumOfReviews()+1);
        listing.setAverageRating(newGpa);
        listing.setNumOfReviews(listing.getNumOfReviews()+1);

        listingRepository.save(listing);

        return ReviewConverter.convertToDto(review);
    }

    @Override
    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }
}
