import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

var AccessKey = "PA0WX0w0MpVGUS_He1GLfNUwxhLDXWvFV8yrNeqOf00";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&client_id=${AccessKey}`);

  return data;
};
