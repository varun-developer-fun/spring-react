import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [userName, SetUserName] = useState("")

 useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  SetUserName(user.name)
  
 },[])
  return (
    <>
      <div className="home-container">
        <header className="hero-section">
          <h1>Welcome, {userName}</h1>
        <Link to="/register" className="register">Register</Link>
        <Link to="/login" className="login">Login</Link>
          <h1>Welcome to BTree Bus Booking</h1>
          <p>Your gateway to seamless ticket booking</p>
          <Link to="/book" className="cta-button">
            Book Now
          </Link> 
          <Link to="/tickets" className="cta-button">
            View Tickets
          </Link>
        </header>

        <section className="features">
          <div className="feature-card">
            <img src="/assets/easy-booking.svg" alt="Easy Booking" />
            <h3>Easy Booking</h3>
            <p>Book your tickets in just a few clicks.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/secure-payments.svg" alt="Secure Payments" />
            <h3>Secure Payments</h3>
            <p>100% secure and trusted payment gateway.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/support.svg" alt="Customer Support" />
            <h3>24/7 Support</h3>
            <p>We're here to help you anytime.</p>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 varundeveloper. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
