<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book a Ticket</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f6f8;
        margin: 0;
        padding: 40px;
    }
    .booking-form {
        background: #ffffff;
        padding: 30px;
        max-width: 450px;
        margin: auto;
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    }
    .booking-form h2 {
        text-align: center;
        margin-bottom: 25px;
        color: #333;
    }
    .form-group {
        margin-bottom: 18px;
    }
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 6px;
        color: #555;
    }
    input[type="text"],
    input[type="date"],
    select {
        width: 100%;
        padding: 10px 12px;
        border-radius: 6px;
        border: 1px solid #ccc;
        background-color: #fafafa;
        font-size: 15px;
    }
    input[type="text"]:focus,
    input[type="date"]:focus,
    select:focus {
        border-color: #007bff;
        background-color: #fff;
        outline: none;
    }
    .submit-btn {
        width: 100%;
        padding: 12px;
        margin-top: 15px;
        background-color: #28a745;
        border: none;
        color: white;
        font-size: 17px;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .submit-btn:hover {
        background-color: #218838;
    }
</style>
</head>
<body>

<form class="booking-form" action="/bookTicket" method="post">
    <h2>Ticket Booking</h2>

    <div class="form-group">
      <label for="id">Booking ID:</label>
      <input type="text" id="id" name="id" disabled placeholder="Auto-generated">
    </div>

    <div class="form-group">
      <label for="passengerName">Passenger Name:</label>
      <input type="text" id="passengerName" name="passengerName" required>
    </div>

    <div class="form-group">
      <label for="bookingDate">Booking Date:</label>
      <input type="date" id="bookingDate" name="bookingDate" required>
    </div>

    <div class="form-group">
      <label for="sourcePlace">Source:</label>
      <select id="sourcePlace" name="sourcePlace" required>
        <option value="">-- Select Source --</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Miami">Miami</option>
      </select>
    </div>

    <div class="form-group">
      <label for="destinationPlace">Destination:</label>
      <select id="destinationPlace" name="destinationPlace" required>
        <option value="">-- Select Destination --</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Seattle">Seattle</option>
        <option value="Boston">Boston</option>
        <option value="Atlanta">Atlanta</option>
        <option value="Denver">Denver</option>
      </select>
    </div>

    <button type="submit" class="submit-btn">Book Ticket</button>
</form>

</body>
</html>
