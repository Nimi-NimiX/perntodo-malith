import React, { Fragment, useState } from "react";
import addTodo from "../../api/addTodo";

const InputTodo = () => {
  const [description, setdescription] = useState("");

  //handle the form submission
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await addTodo(body);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        ></input>
        <button className="btn btn-success ml-5">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
