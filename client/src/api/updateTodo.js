import React from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

const updateTodo = async (todoId, body) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos/${todoId}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updateTodo;
