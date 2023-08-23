import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "../edit-todo/EditTodo";
import axios from "axios";
import deleteTodo from "../../api/deleteTodo";
import getTodos from "../../api/getTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete function
  const delTodo = async (id) => {
    try {
      const deletedTodo = await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getAllTodos = async () => {
    try {
      const todoList = await getTodos();
      setTodos(todoList);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  console.log(todos);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => delTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
