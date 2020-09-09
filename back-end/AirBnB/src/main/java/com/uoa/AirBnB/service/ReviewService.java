package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.reviewModel.ReviewDto;

import java.util.List;

public interface ReviewService {
    ReviewDto findById(Long id) throws Exception;
    List<ReviewDto> findAll();
    List<ReviewDto> findByHost(Long id);
    List<ReviewDto> findByGuest(Long id);
    ReviewDto save(ReviewDto reviewDto);

    void deleteById(Long id);
}
