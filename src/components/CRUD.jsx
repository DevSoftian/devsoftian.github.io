import axios from "../services/httpService";

async function read(tokenHeader, url) {
   const { data: response } = await axios.get(url, tokenHeader);
   // console.log(read, response);
   return response;
}

async function create(tokenHeader, body, url) {
   const { data: response } = await axios.post(url, body, tokenHeader);
   // console.log("create", url);
   return response;
}

async function update(tokenHeader, body, url) {
   const { data: response } = await axios.put(url, body, tokenHeader);
   // console.log("update", url);
   return response;
}

async function deleter(tokenHeader, body, url) {
   const { data: response } = await axios.delete(url, body, tokenHeader);
   // console.log("deleter", url);
   return response;
}

export default {
   read,
   create,
   update,
   deleter,
};
