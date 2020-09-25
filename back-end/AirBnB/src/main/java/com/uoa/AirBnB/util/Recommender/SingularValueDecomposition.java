package com.uoa.AirBnB.util.Recommender;

import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Data
public class SingularValueDecomposition {

    private double averageGlobalRating;

    private int learningIterations;
    private double learningRate;
    private double learningDescent = 0.99;
    private double regularizationTerm = 0.02;

    private int numUsers;
    private int numListings;
    private int numFeatures;

    private Double[] userBiases;
    private Double[] listingBiases;
    private Double[][] userFeatures;
    private Double[][] listingFeatures;


    public SingularValueDecomposition(int features, int iterations){
        numFeatures = features;
        learningIterations = iterations;
        learningRate= 0.005;
    }


    private void initialize(UserListingRatingsTable ratings){
        numUsers = ratings.users.size();
        numListings = ratings.users.get(0).listingRatings.length;

        Random rand = new Random();

        userFeatures = new Double[numUsers][];

        for(int userIndex=0 ;userIndex< numUsers ; userIndex++){
            userFeatures[userIndex] = new Double[numFeatures];
            Arrays.fill(userFeatures[userIndex], 0.0);

            for(int featureIndex=0 ; featureIndex<numFeatures ; featureIndex++)
                userFeatures[userIndex][featureIndex] = rand.nextDouble();
        }

        listingFeatures = new Double[numListings][];
        for(int listingIndex=0; listingIndex<numListings;listingIndex++){
            listingFeatures[listingIndex] = new Double[numFeatures];
            Arrays.fill(listingFeatures[listingIndex], 0.0);

            for(int featureIndex=0 ; featureIndex<numFeatures ; featureIndex++)
                listingFeatures[listingIndex][featureIndex] = rand.nextDouble();
        }

        userBiases = new Double[numUsers];
        Arrays.fill(userBiases, 0.0);
        listingBiases = new Double[numListings];
        Arrays.fill(listingBiases, 0.0);
    }

    public SvdResult factorizeMatrix(UserListingRatingsTable ratings){
        initialize(ratings);

        Double squaredError=0.0;
        int count=0;
        List<Double> rmseAll = new ArrayList<Double>();

        averageGlobalRating = getAverageRating(ratings);
        //System.out.println(averageGlobalRating);

        for (int userIndex=0; userIndex<numUsers; userIndex++){
            for(int listingIndex=0;listingIndex<numListings;listingIndex++){
                if(ratings.users.get(userIndex).listingRatings[listingIndex]!=0){
                    double predictedRating= averageGlobalRating + userBiases[userIndex] + listingBiases[listingIndex]+ Matrix.GetDotProduct(userFeatures[userIndex], listingFeatures[listingIndex]);
                    double error = ratings.users.get(userIndex).listingRatings[listingIndex] - predictedRating;

                    squaredError += Math.pow(error, 2);
                    count++;

                    averageGlobalRating += learningRate* (error-regularizationTerm*averageGlobalRating);
                    userBiases[userIndex] += learningRate* (error - regularizationTerm*userBiases[userIndex]);
                    listingBiases[listingIndex] += learningRate* (error - regularizationTerm*listingBiases[listingIndex]);

                    for(int featureIndex=0; featureIndex<numFeatures; featureIndex++){
                        userFeatures[userIndex][featureIndex] += learningRate * (error*listingFeatures[listingIndex][featureIndex] - regularizationTerm*userFeatures[userIndex][featureIndex]);
                        listingFeatures[listingIndex][featureIndex] += learningRate * (error*userFeatures[userIndex][featureIndex]- regularizationTerm*listingFeatures[listingIndex][featureIndex]);
                    }
                }
            }

            squaredError = Math.sqrt(squaredError/count);
            rmseAll.add(squaredError);

            learningRate *= learningDescent;
        }

        //System.out.println(averageGlobalRating);
        return new SvdResult(averageGlobalRating, userBiases, listingBiases, userFeatures, listingFeatures);
    }


    private double getAverageRating(UserListingRatingsTable ratings){
        double sum = 0.0;
        int count=0;

        for (int userIndex=0; userIndex<numUsers;userIndex++){
            for(int listingIndex=0; listingIndex<numListings;listingIndex++){
                if(ratings.users.get(userIndex).listingRatings[listingIndex]!=null && ratings.users.get(userIndex).listingRatings[listingIndex]!=0){
                    sum += ratings.users.get(userIndex).listingRatings[listingIndex];
                    count++;
                }
            }
        }

        return sum/count;

    }

}
