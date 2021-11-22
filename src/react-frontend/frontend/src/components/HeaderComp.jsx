import React, { Component } from "react";
import { Paper } from "@mui/material";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HeaderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <header margin={20}>
          <nav className=" navbar-expand-md navbar-dark bg-primary navbar-right px-3 ">
            <h1 className="navbar-brand">Photo Nest</h1>
          </nav>

          <Navbar
            className="navbar-right"
            bg="dark"
            variant="dark"
          >
            <Nav className="navbar-right px-3">
              <Link to="/users"> Manage Users</Link>
            </Nav>
            <Nav className="navbar-right px-3">
              <Link to="/photos"> Manage Photos</Link>
            </Nav>
            <Nav className="nav-item navbar-right px-3">
              <Link to="/share"> Share</Link>
            </Nav>
            <Nav className="navbar-right px-3 ms-auto ">
              <Link to="/login"> Log Out</Link>
            </Nav>
          </Navbar>
        </header>
      </Paper>
    );
  }
}