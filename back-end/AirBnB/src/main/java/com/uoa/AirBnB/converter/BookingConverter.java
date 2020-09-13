package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.bookingModel.Booking;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookingConverter {

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

    public static BookingDto convertToDto(Booking booking){
        BookingDto bookingDto = new BookingDto();

        bookingDto.setId(booking.getId());
        bookingDto.setDate(booking.getDate());

        bookingDto.setListingId(booking.getListing().getId());
        bookingDto.setListingTitle(booking.getListing().getTitle());
        bookingDto.setUserId(booking.getUser().getId());

        return bookingDto;
    }

    public static Booking convert(BookingDto bookingDto){
        Booking booking = new Booking();

        booking.setId(bookingDto.getId());
        booking.setDate(bookingDto.getDate());

        booking.setListing(listingServiceStatic.findById(bookingDto.getListingId()));
        booking.setUser(userServiceStatic.findById(bookingDto.getUserId()));

        return booking;
    }
}
