package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.bookingModel.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findAllByListingIdAndDateAfterAndAndDateBefore(long id, Date date1, Date date2);
    List<Booking> findAllByUserIdOrderByDateDesc(long id);
    List<Booking> findAllByListingIdOrderByDateDesc(long id);
}
