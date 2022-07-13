import axios from "axios";
import config from "../config.json";

const serviceEndpoint = "users/";

export function registerUser(user) {
  console.log(user);
  return axios.post(config.apiEndpoint + serviceEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
