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

        listing.setId(listingDto.getId());
        listing.setTitle(listingDto.getTitle());

        listing.setType(listingDto.getType());
        listing.setNumOfBeds(listingDto.getNumOfBeds());
        listing.setNumOfWc(listingDto.getNumOfWc());
        listing.setNumOfRooms(listingDto.getNumOfRooms());
        listing.setLivingRoom(listingDto.isLivingRoom());
        listing.setSquareFootage(listingDto.getSquareFootage());

        listing.setDescription(listingDto.getDescription());

        listing.setSmoking(listingDto.isSmoking());
        listing.setAnimals(listingDto.isAnimals());
        listing.setParties(listingDto.isParties());
        listing.setMinRentDays(listingDto.getMinRentDays());
        listing.setMaxGuests(listingDto.getMaxGuests());

        listing.setLatitude(listingDto.getLatitude());
        listing.setLongitude(listingDto.getLongitude());
        listing.setAddress(listingDto.getAddress());
        listing.setNeighborhood(listingDto.getNeighborhood());
        listing.setTransportation(listingDto.getTransportation());

        listing.setMinCost(listingDto.getMinCost());
        listing.setCostPerExtraGuest(listingDto.getCostPerExtraGuest());

        listing.setWifi(listingDto.isWifi());
        listing.setAc(listingDto.isAc());
        listing.setHeating(listingDto.isHeating());
        listing.setKitchen(listingDto.isKitchen());
        listing.setTv(listingDto.isTv());
        listing.setParking(listingDto.isParking());
        listing.setElevator(listingDto.isElevator());

        listing.setStartDate(listingDto.getStartDate());
        listing.setEndDate(listingDto.getEndDate());

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