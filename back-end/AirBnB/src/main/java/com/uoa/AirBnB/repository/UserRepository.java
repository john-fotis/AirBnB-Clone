package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.userModel.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
