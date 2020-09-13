package com.uoa.AirBnB.model.superModel;

import com.uoa.AirBnB.model.bookingModel.BookingDto;
import com.uoa.AirBnB.model.imageModel.ImageDto;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.messageModel.MessageDto;
import com.uoa.AirBnB.model.reviewModel.ReviewDto;
import com.uoa.AirBnB.model.userModel.UserPostDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ReturnEverything {
    List<UserPostDto> usersList;
    List<ListingDto> listingsList;
    List<BookingDto> bookingsList;
    List<ReviewDto> reviewsList;
    List<MessageDto> messagesList;
    List<ImageDto> imagesList;
}
