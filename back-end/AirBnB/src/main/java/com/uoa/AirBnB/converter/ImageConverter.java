package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.imageModel.Image;
import com.uoa.AirBnB.model.imageModel.ImageDto;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ImageConverter {

    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    private ListingService listingService;
    private static ListingService listingServiceStatic;

    @Autowired
    public void setStatic(){
        this.userServiceStatic=userService;
        this.listingServiceStatic=listingService;
    }

    public static ImageDto convertToDto(Image image){
        ImageDto imageDto = new ImageDto();

        imageDto.setId(image.getId());
        imageDto.setName(image.getName());
        imageDto.setType(image.getType());
        imageDto.setPicByte(image.getPicByte());

        if(image.getUser()!=null)
            imageDto.setUserId(image.getUser().getId());

        if(image.getListing()!=null)
            imageDto.setListingId(image.getListing().getId());

        return imageDto;
    }

    public static Image convert(ImageDto imageDto){
        Image image = new Image();

        image.setId(imageDto.getId());
        image.setName(imageDto.getName());
        image.setType(imageDto.getType());
        image.setPicByte(imageDto.getPicByte());

        if(imageDto.getUserId()!=null) {
            image.setUser(userServiceStatic.findById(imageDto.getUserId()));
        }

        if(imageDto.getListingId()!=null) {
            image.setListing(listingServiceStatic.findById(imageDto.getListingId()));
        }
        return image;
    }
}
