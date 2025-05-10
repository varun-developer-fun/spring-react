import React, { useEffect, useState } from "react";
import "./ViewTicket.css";
import { getTickets } from "../../service/ticketService";
import { useNavigate } from "react-router-dom";

const ViewTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate()
  useEffect(() => {
    getTickets()
      .then((res) => setTickets(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ticket-list-container">
      <button onClick={()=>nav(-1)}>Back</button>
      <h2>Booked Tickets</h2>
      {loading ? (
        <p>Loading tickets...</p>
      ) : tickets.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        <table className="ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Passenger Name</th>
              <th>Booking Date</th>
              <th>Source</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.passengerName}</td>
                <td>{ticket.bookingDate}</td>
                <td>{ticket.sourcePlace}</td>
                <td>{ticket.destinationPlace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewTicket;
