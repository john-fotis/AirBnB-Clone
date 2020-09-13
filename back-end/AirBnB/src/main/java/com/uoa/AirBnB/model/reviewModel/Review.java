package com.uoa.AirBnB.model.reviewModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.userModel.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", nullable = false)
    private long id;

    private String comment;

    @CreationTimestamp
    private Date date;

    private int rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="listing_id", nullable = false)
    private Listing listing;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    public Review(){
    }
}
