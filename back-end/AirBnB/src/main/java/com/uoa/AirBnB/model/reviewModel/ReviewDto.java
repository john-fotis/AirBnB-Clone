package com.uoa.AirBnB.model.reviewModel;

import lombok.Data;

import java.util.Date;

@Data
public class ReviewDto {
    private long id;
    private String comment;
    private Date date;
    private int rating;

    private long listingId;
    private String listingTitle;
    private long userId;
    private String userName;
}