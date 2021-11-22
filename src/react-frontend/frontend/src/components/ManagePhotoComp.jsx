import React, { Component } from "react";
import PhotoService from "../services/PhotoService";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default class ManagePhotoComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        photos: [],
    };
    this.addPhoto = this.addPhoto.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount() {
    {}

    PhotoService.getAllPhoto().then((res) => {
      this.setState({ photos: res.data });
    });
  }

  deletePhoto(id) {
    PhotoService.deletePhoto(id).then((res) => {
      this.setState({photos: this.state.photos.filter(photo => photo.id !== photo.id)});
    });
  }

  editPhoto(id) {
    this.props.history.push(`/update_photos/${id}`);
  }

  addPhoto() {
    this.props.history.push("/upload_photos");
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Photos</h3>
        <div className="div">
          <Button
            color="success"
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={this.addPhoto}
          >
            Add Photo{" "}
          </Button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Photo</th>
                <th> Photo Date Created</th>
                <th> Photo File Type</th>
                <th> Photo Author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.photos.map((Photo) => (
                <tr key={Photo.photoId}>
                   <td>{ 
                        <img
                        className="div image"
                        style={{
                            height: this.imageHeight,
                            width: this.imageWidth,
                            aspectRatio: 16 / 9,
                        }}
                        src={
                            Photo.photoURL
                        }
                        alt="Uploaded image"
                        height="300"
                        widdth="400"
                        ></img>
                  }</td>
                  <td>{Photo.photoDateCreated}</td>
                  <td>{Photo.photoFileType}</td>
                  <td>{Photo.userId}</td>
                  <td>
                    <div className="div">
                      <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          this.editPhoto(Photo.photoId);
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
                        onClick={() => {if (window.confirm("Are you sure? This action cannot be undone!")) this.deletePhoto(Photo.photoId);}}
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
        <div>
        <label>//</label>
        </div>
      </div>
    );
  }
}