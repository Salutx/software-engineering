import axios from "axios";

const ServiceAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVICE_URL}`,
  timeout: 60000 * 3,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default ServiceAPI;
