package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.imageModel.Image;
import com.uoa.AirBnB.model.imageModel.ImageDto;

public interface ImageService {
    ImageDto uploadImage(ImageDto imageDto);
    ImageDto findByName(String imageName) throws Exception;
    ImageDto findDtoById(Long id) throws Exception;
    Image findById(Long id) throws Exception;
    void deleteById(Long id);
}
