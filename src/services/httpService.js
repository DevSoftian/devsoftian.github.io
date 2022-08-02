import axios from "axios";
import { toast } from "react-toastify";

//Factors out http service so if there is aneed to change from Axios, code only needs to be changed on one place.

//Logs connection errors to the console and triggers toast error notification.
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
