import React, { useState } from 'react';
import './Booking.css';
import {createTicket} from '../../service/ticketService'
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const nav = useNavigate()
  const [formData, setFormData] = useState({
    passengerName: '',
    bookingDate: '',
    sourcePlace: '',
    destinationPlace: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const booking = createTicket(formData)
   alert("Booking Confirmed!")
   nav('/')
   booking.then(
    ()=>{
        setFormData(
            {
                passengerName: '',
                bookingDate: '',
                sourcePlace: '',
                destinationPlace: ''
            }
        )
    }
   )
    
  };

  return (
    <div className="booking-container">
      <button onClick={()=>nav(-1)}>Back</button>
      <h2>Book a Ticket</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Passenger Name:
          <input 
            type="text" 
            name="passengerName" 
            value={formData.passengerName} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Booking Date:
          <input 
            type="date" 
            name="bookingDate" 
            value={formData.bookingDate} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Source Place:
          <input 
            type="text" 
            name="sourcePlace" 
            value={formData.sourcePlace} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Destination Place:
          <input 
            type="text" 
            name="destinationPlace" 
            value={formData.destinationPlace} 
            onChange={handleChange} 
            required 
          />
        </label>

        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
