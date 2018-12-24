package com.tl.fsd.casestudy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tl.fsd.casestudy.entity.User;

/**
 * Repository for User
 * 
 * @author 456206
 *
 */

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	List<User> findAll();

	User findByUserId(int userId);

}
