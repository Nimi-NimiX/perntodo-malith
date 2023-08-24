import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField, Stack, Button } from "@mui/material";

//function
const InputTodo = () => {
  const [description, setdescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          Pern Todo List
        </Typography>
      </Box>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <TextField
          type="text"
          className="form-control"
          value={description}
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        ></TextField>
        <Button
          variant="contained"
          color="success"
          type="submit"
          sx={{ marginLeft: 3 }}
        >
          Add
        </Button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
