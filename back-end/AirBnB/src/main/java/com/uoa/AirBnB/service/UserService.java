package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.model.userModel.UserDto;

import java.util.List;

public interface UserService {
    User findByUsername(String username);
    User findById(Long id);
    UserDto findDtoById(Long id);

    List<UserDto> findAll();

    void deleteById(Long id);
}
