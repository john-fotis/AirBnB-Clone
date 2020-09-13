package com.uoa.AirBnB.model.listingModel;

import lombok.Getter;

import java.util.Date;

@Getter
public class ListingParameters {
    private Date startDate;
    private Date endDate;
    private int guests;
    private String country;
    private String city;

    private RoomType type;
    private Double maxCost;
    private Boolean wifi;
    private Boolean ac;
    private Boolean heating;
    private Boolean kitchen;
    private Boolean tv;
    private Boolean parking;
    private Boolean elevator;

}
