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


    /*public void appendUserFeatures(Double[][] userFeatures){
        for(int i=0; i<userIndexToId.size() ; i++){
            users.get(i).appendRatings(userFeatures[i]);
        }
    }

    public void appendListingFeatures(Double[][] listingFeatures){
        for(int f=0; f<listingFeatures[0].length; f++){
            UserListingRatings newFeature = new UserListingRatings((long)2147483647);

            for(int a=0; a<listingIndexToId.size(); a++){
                newFeature.listingRatings[a] = listingFeatures[a][f];
            }

            users.add(newFeature);
        }
    }*/
}
