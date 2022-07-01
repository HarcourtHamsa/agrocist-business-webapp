import axios from "axios";

// set default configs for axios
axios.defaults.baseURL = "https://agrocist-api-dev.herokuapp.com/api/v1";
const helpers = {};

helpers.login = async (data, type) => {
  const res = await axios
    .post(`${type}/login`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return res;
};

helpers.register = async (data, type) => {
  console.log('register...');
  const res = await axios
    .post(`${type}/create-account`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return res;
};

helpers.getAccessToken = () => {};

export default helpers;
