import React, { useEffect, useState } from "react";
import { Form,Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";

export default function Edit() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Students.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Students[index];
    a.Name = name;
    a.Reg = reg;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setReg(localStorage.getItem("Reg"));
    setId(localStorage.getItem("Id"));
  }, []);
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReg">
          <Form.Control
            type="text"
            placeholder="Enter Reg"
            value={reg}
            required
            onChange={(e) => setReg(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
