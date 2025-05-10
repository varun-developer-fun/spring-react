package com.ticket.booking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String passengerName;
	private String bookingDate;
	private String sourcePlace;
	private String destinationPlace;

	public Ticket() {
		super();
	}

	public Ticket(Long id, String passengerName, String bookingDate, String sourcePlace, String destinationPlace) {
		super();
		this.id = id;
		this.passengerName = passengerName;
		this.bookingDate = bookingDate;
		this.sourcePlace = sourcePlace;
		this.destinationPlace = destinationPlace;
	}

	public Long getId() {
		return id;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public String getSourcePlace() {
		return sourcePlace;
	}

	public String getDestinationPlace() {
		return destinationPlace;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public void setSourcePlace(String sourcePlace) {
		this.sourcePlace = sourcePlace;
	}

	public void setDestinationPlace(String destinationPlace) {
		this.destinationPlace = destinationPlace;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", passengerName=" + passengerName + ", bookingDate=" + bookingDate
				+ ", sourcePlace=" + sourcePlace + ", destinationPlace=" + destinationPlace + "]";
	}

}
