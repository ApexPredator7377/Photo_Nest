import React, { Component } from "react";
import UserService from "../services/UserService";

export default class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

      firstName: "",
      lastName: "",
      userType: "",
      email: "",
      userPassword: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeUserTypeHandler = this.changeUserTypeHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }

  saveHandler = (sU) => {
    sU.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userType: this.state.userType,
      email: this.state.email,
      userPassword: this.state.userPassword,
    };
    console.log("user=> " + JSON.stringify(user));

    UserService.createUser(user).then((res) => {
      this.props.history.push("/users");
    });
  };

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeUserTypeHandler(event) {
    this.setState({ userType: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  changeUserPasswordHandler(event) {
    this.setState({ userPassword: event.target.value });
  }

  returnHandler() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div class="card col-md-6 ofsett-md-3 offset-md-3">
              <h3 className="text-centre p-2 div"> Add User </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">

                    <label>First Name: </label>
                    <input
                      placeholder="E.g. Tony"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />

                    <label>Last Name: </label>
                    <input
                      placeholder="E.g. Stark"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />

                    <label>User Type: </label>
                    <input
                      placeholder="E.g. 'a'- Admin, 'u'- User"
                      name="userType"
                      className="form-control"
                      value={this.state.userType}
                      onChange={this.changeUserTypeHandler}
                    />

                    <label>Email Address: </label>
                    <input
                      placeholder="E.g. TonyStark@gmail.com"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />

                    <label>Password: </label>
                    <input
                      autocomplete="off"
                      placeholder="E.g. 1Am1r0nMan"
                      name="userPassword"
                      className="form-control"
                      value={this.state.userPassword}
                      onChange={this.changeUserPasswordHandler}
                    />

                  </div>
                  <button
                    className="btn btn-success m-2"
                    onClick={this.saveUser}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-danger m-2"
                    onClick={this.returnHandler.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Return
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}