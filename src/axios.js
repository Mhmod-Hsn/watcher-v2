// axios
import axios from "axios"

const instance = axios.create({
  baseURL: "/",
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    }
});


export default instance
