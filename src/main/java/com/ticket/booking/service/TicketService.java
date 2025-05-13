package com.ticket.booking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.booking.model.Ticket;
import com.ticket.booking.repository.TicketRepo;

@Service
public class TicketService {

	@Autowired
	private TicketRepo ticketrepo;

	public Ticket bookTicket(Ticket ticket) {
		return ticketrepo.save(ticket);
	}

	public List<Ticket> findAllTicket() {
		return ticketrepo.findAll();
	}

	public Optional<Ticket> findById(Long id) {
		return ticketrepo.findById(id);
	}

	public Optional<Ticket> updateTicket(Long id, Ticket updatedTicket) {
		return ticketrepo.findById(id).map(ticket -> {
			ticket.setPassengerName(updatedTicket.getPassengerName());
			ticket.setSourcePlace(updatedTicket.getSourcePlace());
			ticket.setDestinationPlace(updatedTicket.getDestinationPlace());
			ticket.setBookingDate(updatedTicket.getBookingDate());
			return ticketrepo.save(ticket);
		});
	}

	public boolean deleteTicket(Long id) {
		if(ticketrepo.existsById(id))
		{
			ticketrepo.deleteById(id);
			return true;
		}
		else {
			return false;
		}
		
	}

}
