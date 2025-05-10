package com.ticket.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticket.booking.model.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long>{

}
