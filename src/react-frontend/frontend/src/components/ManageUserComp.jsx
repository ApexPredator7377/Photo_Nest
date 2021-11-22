import React, { Component } from "react";
import UserService from "../services/UserService";
import { /*Container,*/ Button } from "@mui/material";
//import Grid from "@mui/material/Grid";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default class ManageUserComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    {}

    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({users: this.state.users.filter(user => user.id !== user.id)});
    });
  }

  editUser(id) {
    this.props.history.push(`/update_users/${id}`);
  }

  addUser() {
    this.props.history.push("/add_user");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List of Users</h2>
        <div className="div">
          <Button
            color="success"
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={this.addUser}
          >
            Add User{" "}
          </Button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> User First Name</th>
                <th> User Last Name</th>
                <th> User Type</th>
                <th> User Email Address</th>
                <th> User Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((User) => (
                <tr key={User.userId}>
                  <td>{User.firstName}</td>
                  <td>{User.lastName}</td>
                  <td>{User.userType}</td>
                  <td>{User.email}</td>
                  <td>{User.userPassword}</td>
                  <td>
                    <div className="div">
                      <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          this.editUser(User.userId);
                        }}
                        classname="p-5"
                      >
                        Edit
                      </Button>

                      <Button
                        style={{ marginLeft: "10px" }}
                        color="error"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => {if (window.confirm("Are you sure? This action cannot be undone!")) this.deleteUser(User.userId);}}
                        classname="p-5"
                      >
                        Remove
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}