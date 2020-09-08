package com.uoa.AirBnB.model.imageModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.userModel.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id", nullable = false)
    private long id;

    private String name;
    private String type;

    @Column(length = 100000000, columnDefinition = "mediumblob")
    private byte[] picByte;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user_id", nullable = true)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="listing_id", nullable = true)
    private Listing listing;


    public Image() {
    }

    public Image(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }
}
