package com.uoa.AirBnB.model.listingModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uoa.AirBnB.model.imageModel.ImageDto;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.model.userModel.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;

@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ListingDto {

    private long id;
    private String title;

    private RoomType type;
    private int numOfBeds;
    private int numOfWc;
    private int numOfRooms;
    private boolean livingRoom;
    private double squareFootage;

    private String description;

    private boolean smoking;
    private boolean animals;
    private boolean parties;
    private int minRentDays;
    private int maxGuests;

    private double latitude;
    private double longitude;
    private String country;
    private String city;
    private String neighborhood;
    private String address;
    private String postalCode;
    private String transportation;

    private double minCost;
    private double costPerExtraGuest;

    private boolean wifi;
    private boolean ac;
    private boolean heating;
    private boolean kitchen;
    private boolean tv;
    private boolean parking;
    private boolean elevator;

    private Date startDate;
    private Date endDate;

    private int numOfReviews;
    private double averageRating;

    private UserDto host;
    private List<ReviewDto> reviews;
    //private List<BookingDto> bookings;
    private List<ImageDto> images;
}