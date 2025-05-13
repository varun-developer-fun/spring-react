package com.ticket.booking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	@GetMapping("/getTickets/{id}")
	public Optional<Ticket> getByID(@PathVariable Long id){
		return ticketService.findById(id);
	}	
	@PutMapping("/update/{id}")
	public Optional<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket updatedTicket) {
		return ticketService.updateTicket(id,updatedTicket);
	}
	@DeleteMapping("/{id}")
	public void deleteTicket(@PathVariable Long id) {
		boolean res = ticketService.deleteTicket(id);
		System.out.println(res);
	}
}
