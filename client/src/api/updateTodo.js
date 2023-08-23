import React from "react";
import axios from "axios";

const updateTodo = async (todoId, body) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/todos/${todoId}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updateTodo;
