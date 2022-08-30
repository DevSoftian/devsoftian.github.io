import axios from "axios";
import config from "../config.json";

const serviceEndpoint = "users/";

export async function registerUser(user) {
   /*return*/ const response = await axios.post(
      config.apiEndpoint + serviceEndpoint + "create",
      {
         email: user.username,
         password: user.password,
         name: user.name,
      }
   );
   console.log("response " + response.data);
}

export async function loginUser(user) {
   /*return*/ const response = await axios.post(
      config.apiEndpoint + serviceEndpoint + "login",
      {
         password: user.password,
         username: user.username,
      }
   );
   // console.log("response " + response.data);
   return response;
}
