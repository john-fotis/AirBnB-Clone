package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.bookingModel.Booking;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.reviewModel.Review;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ListingConverter {

    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    public void setStatic(){
        this.userServiceStatic=userService;
    }

    public static ListingDto convertToDto(Listing listing){

        ListingDto listingDto = new ListingDto();

        listingDto.setId(listing.getId());
        listingDto.setTitle(listing.getTitle());

        listingDto.setType(listing.getType());
        listingDto.setNumOfBeds(listing.getNumOfBeds());
        listingDto.setNumOfWc(listing.getNumOfWc());
        listingDto.setNumOfRooms(listing.getNumOfRooms());
        listingDto.setLivingRoom(listing.isLivingRoom());
        listingDto.setSquareFootage(listing.getSquareFootage());

        listingDto.setDescription(listing.getDescription());

        listingDto.setSmoking(listing.isSmoking());
        listingDto.setAnimals(listing.isAnimals());
        listingDto.setParties(listing.isParties());
        listingDto.setMinRentDays(listing.getMinRentDays());
        listingDto.setMaxGuests(listing.getMaxGuests());

        listingDto.setLatitude(listing.getLatitude());
        listingDto.setLongitude(listing.getLongitude());
        listingDto.setAddress(listing.getAddress());
        listingDto.setNeighborhood(listing.getNeighborhood());
        listingDto.setTransportation(listing.getTransportation());

        listingDto.setMinCost(listing.getMinCost());
        listingDto.setCostPerExtraGuest(listing.getCostPerExtraGuest());

        listingDto.setWifi(listing.isWifi());
        listingDto.setAc(listing.isAc());
        listingDto.setHeating(listing.isHeating());
        listingDto.setKitchen(listing.isKitchen());
        listingDto.setTv(listing.isTv());
        listingDto.setParking(listing.isParking());
        listingDto.setElevator(listing.isElevator());

        listingDto.setStartDate(listing.getStartDate());
        listingDto.setEndDate(listing.getEndDate());

        listingDto.setHost(UserConverter.convertToDto(listing.getHost()));

        List<ReviewDto> reviewDtoList = listing.getReviews().stream().map(ReviewConverter::convertToDto).collect(Collectors.toList());
        List<BookingDto> bookingDtoList = listing.getBookings().stream().map(BookingConverter::convertToDto).collect(Collectors.toList());

        listingDto.setReviews(reviewDtoList);
        listingDto.setBookings(bookingDtoList);

        return listingDto;
    }

    public static Listing convert(ListingDto listingDto){

        Listing listing = new Listing();

        listing.setId(listing.getId());
        listing.setTitle(listing.getTitle());

        listing.setType(listing.getType());
        listing.setNumOfBeds(listing.getNumOfBeds());
        listing.setNumOfWc(listing.getNumOfWc());
        listing.setNumOfRooms(listing.getNumOfRooms());
        listing.setLivingRoom(listing.isLivingRoom());
        listing.setSquareFootage(listing.getSquareFootage());

        listing.setDescription(listing.getDescription());

        listing.setSmoking(listing.isSmoking());
        listing.setAnimals(listing.isAnimals());
        listing.setParties(listing.isParties());
        listing.setMinRentDays(listing.getMinRentDays());
        listing.setMaxGuests(listing.getMaxGuests());

        listing.setLatitude(listing.getLatitude());
        listing.setLongitude(listing.getLongitude());
        listing.setAddress(listing.getAddress());
        listing.setNeighborhood(listing.getNeighborhood());
        listing.setTransportation(listing.getTransportation());

        listing.setMinCost(listing.getMinCost());
        listing.setCostPerExtraGuest(listing.getCostPerExtraGuest());

        listing.setWifi(listing.isWifi());
        listing.setAc(listing.isAc());
        listing.setHeating(listing.isHeating());
        listing.setKitchen(listing.isKitchen());
        listing.setTv(listing.isTv());
        listing.setParking(listing.isParking());
        listing.setElevator(listing.isElevator());

        listing.setStartDate(listing.getStartDate());
        listing.setEndDate(listing.getEndDate());

        listing.setHost(userServiceStatic.findById(listingDto.getHost().getId()));

        if(listingDto.getReviews() == null)
            listing.setReviews(new ArrayList<Review>());
        else {
            List<Review> reviewList = listingDto.getReviews().stream().map(ReviewConverter::convert).collect(Collectors.toList());
            listing.setReviews(reviewList);
        }

        if(listingDto.getBookings() == null)
            listing.setBookings(new ArrayList<Booking>());
        else {
            List<Booking> bookingList = listingDto.getBookings().stream().map(BookingConverter::convert).collect(Collectors.toList());
            listing.setBookings(bookingList);
        }

        return listing;
    }
}