package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.bookingModel.BookingDto;

import java.util.List;

public interface BookingService {

    BookingDto findById(Long id) throws Exception;
    List<BookingDto> findAll();
    BookingDto save(BookingDto bookingDto);

    void deleteById(Long id);

}
