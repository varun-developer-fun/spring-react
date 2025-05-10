package com.ticket.booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.booking.model.Ticket;
import com.ticket.booking.service.TicketService;

//@Controller
@RestController
@CrossOrigin(origins = "https://localhost:5173")
public class TicketController {

	@Autowired
	private TicketService ticketService;

	@PostMapping("/bookTicket")
	public Ticket bookTicket(@RequestBody Ticket ticket) {
		return ticketService.bookTicket(ticket);
	}
	
	@GetMapping("/getTickets")
	public List<Ticket> allData(){
		return ticketService.findAllTicket();
	}
}
