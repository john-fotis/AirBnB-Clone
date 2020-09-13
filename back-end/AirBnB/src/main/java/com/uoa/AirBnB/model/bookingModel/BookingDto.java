package com.uoa.AirBnB.model.bookingModel;

import lombok.Data;

import java.util.Date;

@Data
public class BookingDto {
    private long id;
    private Date date;

    private long listingId;
    private String listingTitle;
    private long userId;
}