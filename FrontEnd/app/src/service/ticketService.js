import axios from "axios";

const API_URL = "http://localhost:8080";

export const createTicket = (ticket) => {
  return axios.post(`${API_URL}/bookTicket`, ticket);
};
export const getTickets = () => {
  return axios.get(`${API_URL}/getTickets`);
};
export const getTicketByID = (id) => {
  return axios.get(`${API_URL}/getTickets/${id}`);
};
export const updateTicket = (id, ticket) => {
  return axios.put(`${API_URL}/update/${id}`, ticket);
};
export const deleteTicket = (id)=>{
    if(window.confirm("Are you sure You want to Delete???")){
        return (
            axios.delete(`${API_URL}/${id}`).then(()=>alert("Deleted Successfully"))
        )
        
    }
}