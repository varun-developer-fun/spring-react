package com.ticket.booking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.booking.model.Ticket;
import com.ticket.booking.repository.TicketRepo;

@Service
public class TicketService {
	
	@Autowired
	private TicketRepo ticketrepo;
	
	public Ticket bookTicket(Ticket ticket)
	{
		return ticketrepo.save(ticket);
	}
	public List<Ticket> findAllTicket()
	{
		return ticketrepo.findAll();
	}
	
}
