<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page import="com.ticket.booking.model.Ticket"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ticket List</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background: #f9f9f9;
        padding: 30px;
    }
    .container {
        background: #fff;
        padding: 25px;
        border-radius: 10px;
        max-width: 900px;
        margin: auto;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    h1 {
        margin: 0;
        font-size: 28px;
    }
    .btn {
        text-decoration: none;
        padding: 10px 18px;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        font-size: 16px;
    }
    .btn:hover {
        background-color: #218838;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        padding: 12px;
        border: 1px solid #ddd;
        text-align: center;
    }
    th {
        background-color: #28a745;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #e6ffe6;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>Ticket List</h1>
        <div>
            <a href="/" class="btn">Home</a>
            <a href="/" class="btn" style="margin-left:10px;">Add Ticket</a>
        </div>
    </div>

    <%
    List<Ticket> allTicket = (List<Ticket>) request.getAttribute("tickets");
    if (allTicket != null && !allTicket.isEmpty()) {
    %>
    <table>
        <thead>
            <tr>
                <th>Booking ID</th>
                <th>Passenger Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Booking Date</th>
            </tr>
        </thead>
        <tbody>
            <% for (Ticket ticket : allTicket) { %>
            <tr>
                <td><%= ticket.getId() %></td>
                <td><%= ticket.getPassengerName() %></td>
                <td><%= ticket.getSourcePlace() %></td>
                <td><%= ticket.getDestinationPlace() %></td>
                <td><%= ticket.getBookingDate() %></td>
            </tr>
            <% } %>
        </tbody>
    </table>
    <%
    } else {
    %>
        <p style="text-align:center; font-weight: bold;">No tickets available.</p>
    <%
    }
    %>
</div>

</body>
</html>
