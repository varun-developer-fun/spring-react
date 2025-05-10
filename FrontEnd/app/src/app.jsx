import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from './Components/booking/booking.jsx'
import Home from './Components/home.jsx'
import ViewTicket from './Components/viewTicket/viewTicket.jsx'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/tickets" element={<ViewTicket />} />
      </Routes>
  )
}

export default App