/* //////////////////////////////////////////////////
IMPORT AXIOS
////////////////////////////////////////////////// */
import axios from "axios";

/* //////////////////////////////////////////////////
Axios instance with a dynamic base URL based on the 
environment (production or development) and configures 
it to send cookies with cross-origin requests 
for authentication.
////////////////////////////////////////////////// */
export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://lifequests.onrender.com/api/v1'
      : 'http://localhost:3000/api/v1',
    withCredentials: true, //Allows sending cookies in cross-origin requests
    credentials: 'include', //Ensures credentials are included with requests
});