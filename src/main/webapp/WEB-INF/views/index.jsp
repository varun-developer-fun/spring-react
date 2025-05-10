<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home - Ticket Booking Application</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background: #f0f2f5;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .home-container {
        background: #ffffff;
        padding: 40px 30px;
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 400px;
    }
    h1 {
        margin-bottom: 20px;
        color: #333;
    }
    p {
        margin-bottom: 30px;
        color: #666;
        font-size: 16px;
    }
    .btn {
        display: inline-block;
        text-decoration: none;
        padding: 12px 20px;
        margin: 10px 5px;
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        border-radius: 6px;
        transition: background-color 0.3s;
    }
    .btn:hover {
        background-color: #0056b3;
    }
</style>
</head>
<body>

<div class="home-container">
    <h1>Welcome to Ticket Booking</h1>
    <p>Choose an action below to continue:</p>

    <a href="/addTicket" class="btn">Book a Ticket</a>
    <a href="/listTicket" class="btn">View Booked Tickets</a>
</div>

</body>
</html>
