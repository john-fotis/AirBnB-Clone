package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.bookingModel.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
