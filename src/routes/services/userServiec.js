import axios from "../../axios";

const handlerLogin = (email, password) => {
  return axios.post("/api/login/", {
    email,
    password,
  });
};

const getAlluser = (inputId) => {
  return axios.get(`/api/all/getUser?id=${inputId}`);
};

export { handlerLogin, getAlluser };
