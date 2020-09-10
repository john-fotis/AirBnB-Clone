package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.ListingConverter;
import com.uoa.AirBnB.model.listingModel.Listing;
import com.uoa.AirBnB.model.listingModel.ListingDto;
import com.uoa.AirBnB.model.listingModel.ListingParameters;
import com.uoa.AirBnB.repository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class ListingServiceImpl implements ListingService {

    ListingConverter listingConverter = new ListingConverter();

    @Autowired
    private ListingRepository listingRepository;

    @Override
    public ListingDto findDtoById(Long id) throws Exception {
        Listing listing;
        try {
            listing = listingRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Listing not found", nsee.getCause());
        }

        return listingConverter.convertToDto(listing);
    }

    @Override
    public List<ListingDto> findAll() {
        return listingRepository.findAll()
                .stream()
                .map(ListingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ListingDto> findByHost(Long id) {
        return listingRepository.findAllByHostId(id)
                .stream()
                .map(ListingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<Listing> findWithParametersBasic(String country, String city, Date startDate, Date endDate, int guests) {
        return listingRepository.findAllByCountryAndCityAndStartDateBeforeAndEndDateAfterAndMaxGuestsIsGreaterThanEqual(country, city, startDate, endDate, guests);
    }

    @Override
    public List<ListingDto> findWithParameters(ListingParameters listingParameters) {
        List<Listing> listingList=findWithParametersBasic(listingParameters.getCountry(), listingParameters.getCity(), listingParameters.getStartDate(), listingParameters.getEndDate(), listingParameters.getGuests());

        if(listingParameters.getAc()!=null){
            listingList = listingList.stream().map(listing -> {
                if(listing.isAc()==listingParameters.getAc())
                    return listing;
                else
                    return null;
            }).collect(Collectors.toList());
        }


        while(listingList.remove(null));
        if(listingList.isEmpty() || listingList==null)
            return Collections.emptyList();

        return listingList.stream()
                .map(ListingConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public Listing findById(Long id) {
        Listing listing;
        listing = listingRepository.findById(id).get();
        return listing;
    }

    @Override
    public ListingDto save(ListingDto listingDto) throws Exception {
        Listing listing = ListingConverter.convert(listingDto);
        listing = listingRepository.save(listing);

        System.out.println("Listing added or updated");
        return listingConverter.convertToDto(listing);
    }

    @Override
    public void deleteById(Long id) {
        listingRepository.deleteById(id);
    }
}
