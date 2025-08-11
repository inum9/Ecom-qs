
import axios from 'axios';

const API_URL = "https://ecom-qs.onrender.com/api/v1/users";

const register = (name, email, password, role) => {
 
    return axios.post(API_URL + "/register", {
        name,
        email,
        password,
        role,
    });
};

const authService = {
    register,
    // Hum yahan login function bhi baad mein add karenge
};

export default authService;