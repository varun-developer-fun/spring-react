import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from './Components/booking/booking.jsx'
import Home from './Components/home.jsx'
import ViewTicket from './Components/viewTicket/viewTicket.jsx'
import UpdateTicket from './Components/updateTicket/updateTicket.jsx'
import Register from './Components/Auth/register.jsx'
import Login from './Components/Auth/login.jsx'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/tickets" element={<ViewTicket />} />
        <Route path="/update/:id" element={<UpdateTicket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default App