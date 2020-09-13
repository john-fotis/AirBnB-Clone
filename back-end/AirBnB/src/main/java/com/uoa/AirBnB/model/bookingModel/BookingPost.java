package com.uoa.AirBnB.model.bookingModel;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BookingPost {
    private Date startDate;
    private Date endDate;
    private long listingId;
    private long userId;
}