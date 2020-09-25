package com.uoa.AirBnB.util.Recommender;

public class Matrix {

    public static Double GetDotProduct(Double[] matrixOne, Double[] matrixTwo)
    {
        Double sum=0.0;
        for(int i=0; i<matrixOne.length;i++){
                sum=matrixOne[i]*matrixTwo[i];
        }
        return sum;
    }
}
