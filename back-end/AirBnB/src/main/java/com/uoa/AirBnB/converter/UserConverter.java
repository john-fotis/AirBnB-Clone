package com.uoa.AirBnB.converter;

import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.model.userModel.UserDto;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {

    public static UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setNumber(user.getNumber());
        userDto.setApproved(user.getApproved());

        if(user.getProfileImage()!=null)
            userDto.setImage(ImageConverter.convertToDto(user.getProfileImage()));

        return userDto;
    }

    public static User convert(UserDto userDto) {
        User user = new User();

        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setNumber(userDto.getNumber());
        user.setApproved(userDto.getApproved());

        if(userDto.getImage()!=null)
            user.setProfileImage(ImageConverter.convert(userDto.getImage()));

        return user;
    }
}