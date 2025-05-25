package com.ticket.booking.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.booking.model.User;
import com.ticket.booking.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "https://localhost:5173")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public String register(@RequestBody User user) {
		if(userService.findUserByUserName(user)!= null)
		{
			return "User Exists";
		}
		userService.registerUser(user);
		return "User Registered Successfully";
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user){
		User existingUser = userService.findUserByUserName(user);
		if(existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
			String token = UUID.randomUUID().toString();
			existingUser.setToken(token);
			userService.registerUser(existingUser); // to update the token (not registering)
			return existingUser;
		}
		return null;
	}
	

}
