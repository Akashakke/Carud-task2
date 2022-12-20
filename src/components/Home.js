import React, { Fragment } from "react";
import { Button, Container, Navbar, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

export default function Home() {
  let history = useNavigate();

  const handleEdit=(id , name,reg)=>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Reg',reg)
    localStorage.setItem('Id',id)   
  }
  const handleDelete = (id) => {
    var index = Students.map(function (e) {
      return e.id;
    }).indexOf(id);
    Students.splice(index, 1);
    history("/");
  };

  return (
    
    
    <Fragment>
      <div className="header">
      <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="justify-content-end flex-grow-1 pe-3" href="/">Student Teacher task</Navbar.Brand>
</Container>
</Navbar>
    </div>
      <div style={{ margin: "18rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg.No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Students && Students.length > 0
              ? Students.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Reg}</td>
                      <td>
                        <Link to={'/edit'}>
                        <Button onClick={() => handleEdit(item.id,item.Name,item.Reg)}>Edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                        &nbsp;
                       
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
            <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}
