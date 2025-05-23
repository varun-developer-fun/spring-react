import axios from "axios";

const API_URL = "http://localhost:8080/user";

export const userRegister = (user)=>{
    return axios.post(`${API_URL}/register`,user)
}
export const userLogin = (user)=>{
    return axios.post(`${API_URL}/login`,user)
}