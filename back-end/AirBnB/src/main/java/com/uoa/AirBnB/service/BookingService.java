package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.bookingModel.BookingPost;

import java.util.List;

public interface BookingService {

    BookingDto findById(Long id) throws Exception;
    List<BookingDto> findAll();
    List<BookingDto> returnMyBookings(long id);
    List<BookingDto> returnListingBookings(long id);

    List<BookingDto> newBooking(BookingPost bookingPost);
    BookingDto save(BookingDto bookingDto);

    void deleteById(Long id);
}
