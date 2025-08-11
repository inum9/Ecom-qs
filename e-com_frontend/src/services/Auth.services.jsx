
import axios from 'axios';

const API_URL = "https://ecom-qs.onrender.com/api/v1/users"
const register = (name, email, password, role) => {
 
    return axios.post(API_URL + "/register", {
        name,
        email,
        password,
        role,
    });
};
const login = async (email, password) => {
    const response = await axios.post(API_URL + "/login", { email, password });
    // Agar data mein accessToken hai, toh return karein
    if (response.data.data.accessToken) {
        return response.data.data;
    }
    return response.data;
};


const AuthService = {
    register,login

};

export default AuthService;