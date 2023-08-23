import React from "react";
import axios from "axios";

const getTodos = async () => {
  const response = await axios.get("http://localhost:5000/api/todos");
  const jsonData = response.data;
  return jsonData;
};

export default getTodos;
