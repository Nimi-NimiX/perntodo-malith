import React from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

const deleteTodo = async (todoId) => {
  try {
    const deleteTodo = await axios.delete(`${BASE_URL}/${todoId}`);
  } catch (err) {
    throw err;
  }
};

export default deleteTodo;
