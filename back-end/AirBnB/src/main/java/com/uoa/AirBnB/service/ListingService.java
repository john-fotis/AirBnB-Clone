package com.uoa.AirBnB.service;

import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.listingModel.ListingDto;

import java.util.List;

public interface ListingService {

    ListingDto findDtoById(Long id) throws Exception;
    List<ListingDto> findAll();

    Listing findById(Long id);
    ListingDto save(ListingDto listingDto) throws Exception;

    void deleteById(Long id);
}
