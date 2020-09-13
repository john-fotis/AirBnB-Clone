package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.ImageConverter;
import com.uoa.AirBnB.converter.UserPostConverter;
import com.uoa.AirBnB.model.superModel.ReturnEverything;
import com.uoa.AirBnB.repository.ImageRepository;
import com.uoa.AirBnB.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class SuperServiceImpl implements SuperService {
    @Autowired
    BookingService bookingService;
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    ListingService listingService;
    @Autowired
    MessageService messageService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    UserRepository userRepository;


    @Override
    public ReturnEverything returnEverything() {
        ReturnEverything returnEverything = new ReturnEverything();

        returnEverything.setUsersList(userRepository.findAll()
                .stream()
                .map(UserPostConverter::convertToDto)
                .collect(Collectors.toList()));

        returnEverything.setListingsList(listingService.findAll());
        returnEverything.setBookingsList(bookingService.findAll());
        returnEverything.setReviewsList(reviewService.findAll());
        returnEverything.setMessagesList(messageService.findAll());
        returnEverything.setImagesList(imageRepository.findAll().stream()
                .map(ImageConverter::convertToDto)
                .collect(Collectors.toList()));

        return returnEverything;
    }
}
