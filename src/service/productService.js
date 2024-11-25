import axios from "axios";

export const fetchStore = async (callback) => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      callback(resp.data)
    } catch {
      console.error("error");
    }
  };