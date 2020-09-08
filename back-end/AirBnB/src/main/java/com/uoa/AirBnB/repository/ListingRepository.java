package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.listingModel.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {
    List<Listing> findAllByHostId(Long id);
}
