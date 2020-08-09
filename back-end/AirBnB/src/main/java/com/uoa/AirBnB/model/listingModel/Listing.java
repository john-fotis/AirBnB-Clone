package com.uoa.AirBnB.model.listingModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Listing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "listing_id", nullable = false)
    private long id;
    private String title;

    // -- Space --
    @Enumerated(EnumType.STRING)
    private RoomType type;
    private int numOfBeds;
    private int numOfWc;
    private int numOfRooms;
    private boolean livingRoom;
    private double squareFootage;

    private String description;

    // -- Rules --
    private boolean smoking;
    private boolean animals;
    private boolean parties;
    private int minRentDays;
    private int maxGuests;

    // -- Location --
    private double latitude;
    private double longitude;
    private String address;
    private String neighborhood;
    private String transportation;

    // -- Cost --
    private double minCost;
    private double costPerExtraGuest;

    // -- Facilities --
    private boolean wifi;
    private boolean ac;
    private boolean heating;
    private boolean kitchen;
    private boolean tv;
    private boolean parking;
    private boolean elevator;

    // -- Availability Days --
    private Date startDate;
    private Date endDate;

    // -- Reviews --
    private int numOfReviews;
    private double averageRating;

    // reviews, host, photos, messages

}
