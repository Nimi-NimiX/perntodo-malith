import React from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

const addTodo = async (description) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/todos`,
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
