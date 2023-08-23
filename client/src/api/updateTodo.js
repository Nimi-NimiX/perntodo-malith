import React from "react";

const updateTodo = async (todoId, body) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/todos/${todoId}`,
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
