package com.uoa.AirBnB.model.userModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.uoa.AirBnB.model.bookingModel.Booking;
import com.uoa.AirBnB.model.imageModel.Image;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.messageModel.Message;
import com.uoa.AirBnB.model.reviewModel.Review;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 120)
    private String password;

    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private String number;

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Image profileImage;

    @CreationTimestamp
    private Date userSince;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    private Boolean approved;

    @OneToMany(mappedBy = "host" ,fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Listing> myListings;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Review> reviews;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "guest", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Message> messages;


    public User() {
    }
}


