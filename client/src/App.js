import React, { Fragment } from "react";
import "./App.css";
//components
import InputTodo from "./components/input-todo/InputTodo";
import ListTodos from "./components/list-todo/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
