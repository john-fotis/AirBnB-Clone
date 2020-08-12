package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.BookingConverter;
import com.uoa.AirBnB.model.bookingModel.Booking;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService{

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public BookingDto findById(Long id) throws Exception {
        Booking booking;

        try{
            booking=bookingRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Booking not found", nsee.getCause());
        }

        return BookingConverter.convertToDto(booking);
    }

    @Override
    public List<BookingDto> findAll() {
        return bookingRepository.findAll()
                .stream()
                .map(BookingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookingDto save(BookingDto bookingDto) {
        Booking booking = BookingConverter.convert(bookingDto);

        booking = bookingRepository.save(booking);

        return BookingConverter.convertToDto(booking);
    }

    @Override
    public void deleteById(Long id) {
        bookingRepository.deleteById(id);
    }
}
