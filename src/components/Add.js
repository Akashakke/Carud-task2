import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Students from "./Students";
import { v4 as uuid } from "uuid";
import {  useNavigate } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuid();
    let uniqueId = id.slice(0, 8);

    let a = name,
      b = reg;
    Students.push({ id: uniqueId, Name: a, Reg: b });
    history("/");
  };
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReg">
          <Form.Control
            type="text"
            placeholder="Enter Reg"
            required
            onChange={(e) => setReg(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
