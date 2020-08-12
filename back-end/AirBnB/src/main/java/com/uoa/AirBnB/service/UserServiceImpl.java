package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.UserConverter;
import com.uoa.AirBnB.model.userModel.User;
import com.uoa.AirBnB.model.userModel.UserDto;
import com.uoa.AirBnB.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    UserConverter userConverter = new UserConverter();

    @Autowired
    UserRepository userRepository;


    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).get();
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public UserDto findDtoById(Long id) {
        return UserConverter.convertToDto(userRepository.findById(id).get());
    }

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(UserConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
