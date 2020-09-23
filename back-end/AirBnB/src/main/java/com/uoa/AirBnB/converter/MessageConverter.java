package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.messageModel.Message;
import com.uoa.AirBnB.model.messageModel.MessageDto;
import com.uoa.AirBnB.service.ListingService;
import com.uoa.AirBnB.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageConverter {

    @Autowired
    private ListingService listingService;
    private static ListingService listingServiceStatic;

    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    public void setStatic(){
        this.listingServiceStatic=listingService;
        this.userServiceStatic=userService;
    }

    public static MessageDto convertToDto(Message message){
        MessageDto messageDto = new MessageDto();

        messageDto.setId(message.getId());
        messageDto.setText(message.getText());
        messageDto.setSeen(message.isSeen());
        messageDto.setWay(message.isWay());
        messageDto.setSendDate(message.getSendDate());

        messageDto.setListingId(message.getListing().getId());
        messageDto.setListingTitle(message.getListing().getTitle());
        messageDto.setGuestId(message.getGuest().getId());
        messageDto.setGuestName(message.getGuest().getUsername());

        return messageDto;
    }

    public static Message convert(MessageDto messageDto){
        Message message = new Message();

        message.setId(messageDto.getId());
        message.setText(messageDto.getText());
        message.setSeen(messageDto.isSeen());
        message.setWay(messageDto.isWay());
        message.setSendDate(messageDto.getSendDate());

        message.setListing(listingServiceStatic.findById(messageDto.getListingId()));
        message.setGuest(userServiceStatic.findById(messageDto.getGuestId()));

        return message;
    }
}
