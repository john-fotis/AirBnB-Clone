package com.uoa.AirBnB.model.imageModel;

import lombok.Data;

@Data
public class ImageDto {

    private long id;

    private String name;
    private String type;

    private Long userId;
    private Long listingId;

    private byte[] picByte;


    public ImageDto(){

    }

    public ImageDto(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }
}
