package com.uoa.AirBnB.util.Recommender;

import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Data
public class UserListingRatings {

    public long userId;
    public Double[] listingRatings;
    public double score;


    public UserListingRatings(Long userId, int listingCount){
        this.userId=userId;
        listingRatings = new Double[listingCount];
        Arrays.fill(listingRatings, 0.0);
    }


    public void appendRatings(Double[] ratings){
        List<Double> allRatings = new ArrayList<Double>();

        Collections.addAll(allRatings, listingRatings);
        Collections.addAll(allRatings, ratings);

        listingRatings = allRatings.toArray(new Double[0]);
    }

    public void print(){
        System.out.println(userId);
        for (Double listingRating: listingRatings
             ) {
            System.out.println(listingRating);
        }
    }
}
