package com.uoa.AirBnB.util.Recommender;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserListingRatingsTable {

    public List<UserListingRatings> users;
    public List<Long> userIndexToId;
    public List<Long> listingIndexToId;


    public UserListingRatingsTable(){
        users=new ArrayList<UserListingRatings>();
        userIndexToId=new ArrayList<Long>();
        listingIndexToId=new ArrayList<Long>();
    }

}
