import axios from "axios";
import {jwtDecode} from 'jwt-decode'

export const fetchLogin = async (data, callback) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", data);
      callback(true, res.data.token)
    } catch(err) {
      callback(false, err);
    }
  };

export const getUsername = (token) => {
    const decoded = jwtDecode(token)
    return decoded.user
}