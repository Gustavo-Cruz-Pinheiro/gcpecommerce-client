import axios from "axios";

export default axios.create({
  baseURL: "https://ecommerce-gcp.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});