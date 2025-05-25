import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./Components/booking/booking.jsx";
import Home from "./Components/home.jsx";
import ViewTicket from "./Components/viewTicket/viewTicket.jsx";
import UpdateTicket from "./Components/updateTicket/updateTicket.jsx";
import Register from "./Components/Auth/register.jsx";
import Login from "./Components/Auth/login.jsx";
import { PrivateRoute } from "./Components/Auth/PrivateRoute.jsx";
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}/>

      {/* Private  */}
      <Route
        path="/book"
        element={
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <ViewTicket />
          </PrivateRoute>
        }
      />
      <Route
        path="/update/:id"
        element={
          <PrivateRoute>
            <UpdateTicket />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
