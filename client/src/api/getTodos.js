import React from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

const getTodos = async () => {
  const response = await axios.get(`${BASE_URL}/todos`);
  const jsonData = response.data;
  return jsonData;
};

export default getTodos;
