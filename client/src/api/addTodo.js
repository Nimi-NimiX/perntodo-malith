import React from "react";
import axios from "axios";

const addTodo = async (description) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/todos",
      JSON.stringify(description),
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

export default addTodo;
