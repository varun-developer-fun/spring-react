import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateTicket.css';
import { getTicketByID, updateTicket } from '../../service/ticketService';

const UpdateTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    passengerName: '',
    bookingDate: '',
    sourcePlace: '',
    destinationPlace: ''
  });
  
  useEffect(() => {

    getTicketByID(id).then(res => setFormData(
        {
            passengerName: res.data.passengerName,
            bookingDate: res.data.bookingDate,
            sourcePlace: res.data.sourcePlace,
            destinationPlace: res.data.destinationPlace
        }
    )
    )
  }, [id]);
  
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = updateTicket(id,formData)
    if(update)
        alert("updated")
        navigate('/tickets')
  };

  return (
    <div className="update-container">
        <button onClick={()=> navigate(-1)}>Back</button>
      <h2>Update Ticket</h2>
      <form onSubmit={handleSubmit} className="update-form">
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
        <button type="submit" className="update-btn">Update Ticket</button>
      </form>
    </div>
  );
};

export default UpdateTicket;
