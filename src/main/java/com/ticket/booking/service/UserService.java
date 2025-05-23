package com.ticket.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.booking.model.User;
import com.ticket.booking.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public User registerUser(User user) {
		return userRepo.save(user);
	}
	
	public User findUserByUserName(User user) {
		return userRepo.findByUsername(user.getUsername());
	}
}
