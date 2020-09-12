package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.BookingConverter;
import com.uoa.AirBnB.model.bookingModel.Booking;
import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.bookingModel.BookingPost;
import com.uoa.AirBnB.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
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
    public List<BookingDto> returnMyBookings(long id) {
        return bookingRepository.findAllByUserIdOrderByDateDesc(id)
                .stream()
                .map(BookingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingDto> returnListingBookings(long id) {
        return bookingRepository.findAllByListingIdOrderByDateDesc(id)
                .stream()
                .map(BookingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookingDto save(BookingDto bookingDto) {
        Booking booking = BookingConverter.convert(bookingDto);

        booking = bookingRepository.save(booking);

        System.out.println("Booking added or updated");

        return BookingConverter.convertToDto(booking);
    }

    @Override
    public List<BookingDto> newBooking(BookingPost bookingPost) {
        List<BookingDto> bookingDtoList= new ArrayList<BookingDto>();
        BookingDto bookingDto=new BookingDto();
        BookingDto bookingDtoAfter=new BookingDto();
        bookingDto.setListingId(bookingPost.getListingId());
        bookingDto.setUserId(bookingPost.getUserId());

        Calendar cal = Calendar.getInstance();

        cal.setTime(bookingPost.getStartDate());

        Calendar cal2 = Calendar.getInstance();
        cal2.setTime(bookingPost.getEndDate());

        while(cal.compareTo(cal2)<0) {
           bookingDto.setDate(cal.getTime());

           bookingDtoAfter=save(bookingDto);
           bookingDtoList.add(bookingDtoAfter);

           cal.add(Calendar.DATE, 1);
        }

        return bookingDtoList;
    }

    @Override
    public void deleteById(Long id) {
        bookingRepository.deleteById(id);
    }
}
