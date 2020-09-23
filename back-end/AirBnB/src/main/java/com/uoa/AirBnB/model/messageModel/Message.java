package com.uoa.AirBnB.model.messageModel;

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
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id", nullable = false)
    private long id;

    private String text;

    @CreationTimestamp
    private Date sendDate;

    private boolean seen;

    private boolean way;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="listing_id", nullable = false)
    private Listing listing;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user_id", nullable = false)
    private User guest;


    public Message(){
    }
}
