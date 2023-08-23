import React from "react";
import axios from "axios";

const deleteTodo = async (todoId) => {
  try {
    const deleteTodo = await axios.delete(
      `http://localhost:5000/todos/${todoId}`
    );
  } catch (err) {
    throw err;
  }
};

export default deleteTodo;
