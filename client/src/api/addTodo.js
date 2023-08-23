import React from "react";

const addTodo = async (description) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/todos",
      JSON.stringify(body),
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
