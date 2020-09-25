package com.uoa.AirBnB.util.Recommender;

import lombok.Data;

@Data
public class SvdResult {

    public Double averageGlobalRating;
    public Double[] userBiases;
    public Double[] listingBiases;
    public Double[][] userFeatures;
    public Double[][] listingFeatures;

    public SvdResult(Double averageGlobalRating, Double[] userBiases, Double[] listingBiases, Double[][] userFeatures, Double[][] listingFeatures)
    {
        this.averageGlobalRating = averageGlobalRating;
        this.userBiases = userBiases;
        this.listingBiases=listingBiases;
        this.userFeatures = userFeatures;
        this.listingFeatures=listingFeatures;
    }

}
