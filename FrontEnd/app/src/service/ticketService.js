import axios from "axios";

const API_URL = "http://localhost:8080";

export const createTicket = (ticket)=>{
    return(
        axios.post(`${API_URL}/bookTicket`, ticket)
    )
    
}

export const getTickets = ()=>{
    return(
        axios.get(`${API_URL}/getTickets`)
    )
}
