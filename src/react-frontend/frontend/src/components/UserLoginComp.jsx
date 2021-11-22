import React, { Component, useState } from "react";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import LoginIcon from "@mui/icons-material/Login";
import { Container, Button, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import FormGroup from "@mui/material/FormGroup";

export default class UserLoginComp extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {
    email: "",
    password: "",
  };

  resetLoginForm = () => {
    this.setState(() => this.initialState);
  };

  credentialChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2 className="justify-content-center p-4 div">
          <Paper style={{ display: "inline-block" }} width="20%">
            <h2 className="div justify-content-center p-4 ">Login </h2>
            <div>
              <Card style={{ display: "inline-block" }}>
                <div>
                  <FormGroup>
                    <div>
                      <input Width="10%" className>
                      </input>
                      <FormGroup
                        required
                        autoComplete="off"
                        type="text"
                        name="email"
                        value={this.email}
                        className={"bg-dark text-white"}
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </FormGroup>
                </div>

                <FormGroup>
                  <div>
                    <input Width="10%"></input>
                    <FormGroup
                      required
                      autoComplete="off"
                      type="password"
                      name="password"
                      value={this.password}
                      className={"bg-dark text-white"}
                      placeholder="Enter Password"
                    />
                  </div>
                </FormGroup>
              </Card>
            </div>
            <Button
              size="sm"
              type="button"
              variant="success"
              startIcon={<LoginIcon />}
              onClick={() => {
                this.props.history.push("/users");}}
            >
              Submit
            </Button>{" "}
            <Button
              size="sm"
              type="button"
              variant="info"
              startIcon={<RestorePageIcon />}
            >
              Clear
            </Button>
          </Paper>
        </h2>
      </div>
    );
  }
}