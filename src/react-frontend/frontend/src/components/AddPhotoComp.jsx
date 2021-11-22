import React, { Component } from "react";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "../firebase";
import PhotoService from "../services/PhotoService";

export default class AddPhotoComp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      image: null,
      viewImage: null,
      imageHeight: "",
      imageWidth: "",
      progress: "",

      photoId: "",
      photoURL: "",
      photoFileType: "",
      photoDateCreated: "",
      userId: "",
    };

    this.changePhotoURLHandler = this.changePhotoURLHandler.bind(this);
    this.changePhotoFileTypeHandler = this.changePhotoFileTypeHandler.bind(this);
    this.changePhotoDateCreatedHandler = this.changePhotoDateCreatedHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changePhotoHandler = this.changePhotoHandler.bind(this); 
    this.uploadPhotoHandler = this.uploadPhotoHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }

  changePhotoHandler = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      const viewImage = e.target.files[0];
      const imageHeight = Math.round((viewImage.width * 9) / 16);
      const imageWidth = viewImage.width;
      this.setState(() => ({
        viewImage: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  uploadPhotoHandler = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`photos/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  returnHandler() {
    this.props.history.push("/photos");
  }

  saveHandler = (sU) => {
    sU.preventDefault();
    let photo = {
      photoURL: this.state.photoURL,
      photoFileType: this.state.photoFileType,
      photoDateCreated: this.state.photoDateCreated,
      userId: this.state.userId,
    };
    console.log("photo=> " + JSON.stringify(photo));

    PhotoService.createPhoto(photo).then((res) => {
      this.props.history.push("/photos");
    });
  };

  changePhotoURLHandler(event) {
    this.setState({ photoURL: event.target.value });
  }

  changePhotoFileTypeHandler(event) {
    this.setState({ photoFileType: event.target.value });
  }

  changePhotoDateCreatedHandler(event) {
    this.setState({ photoDateCreated: event.target.value });
  }

  changeUserIdHandler(event) {
    this.setState({ userId: event.target.value });
  }

  render() {
    return (
      <div>
        <h2 className="text-center p-2 div">Add Photo</h2>
        <div className="div" align="left">
          <Paper elevation={3} className="div p-3">
            <form>
              <input type="file" onChange={this.changePhotoHandler}>              
              </input>
            </form>

            <div align="left" height="35%" width="35%">
              <img
                className="div"
                style={{
                  height: this.imageHeight,
                  width: this.imageWidth,
                  aspectRatio: 16 / 9,
                }}
                src={
                  this.state.viewImage ||
                  "https://firebasestorage.googleapis.com/v0/b/photo-nest.appspot.com/o/Demo.jpg?alt=media&token=626e5841-614a-47ee-97a1-665688d9fe71"
                }
                alt="Uploaded image"
                height="300"
                widdth="400"
              />
            </div>
            <div align="left" className="div">
              <Stack spacing={2} direction="row" className="div">
              <button
                    className="btn btn-success m-2"
                    onClick={this.uploadPhotoHandler}
                  >
                    Upload
                  </button>
                <progress
                  value={this.state.progress}
                  max="100"
                  variant="information"
                />
              </Stack>
            </div>
            <form>
                      <label>Firebase URL: </label>
                      <input
                      placeholder="E.g. https://firebasestorage.googleapis.com/v0/b/photo-nest.appspot.com/o/Demo.jpg?alt=media&token=626e5841-614a-47ee-97a1-665688d9fe71"
                      name="photoURL"
                      className="form-control"
                      value={this.state.photoURL}
                      onChange={this.changePhotoURLHandler}
                    />

                    <label>File Type: </label>
                    <input
                      placeholder="E.g. jpgk"
                      name="photoFileType"
                      className="form-control"
                      value={this.state.photoFileType}
                      onChange={this.changePhotoFileTypeHandler}
                    />

                    <label>Date: </label>
                    <input
                      placeholder="E.g. 2018-08-06 22:49:19"
                      name="photoDateCreated"
                      className="form-control"
                      value={this.state.photoDateCreated}
                      onChange={this.changePhotoDateCreatedHandler}
                    />

                    <label>Autor User ID: </label>
                    <input
                      placeholder="E.g. 1 - Nathan"
                      name="userId"
                      className="form-control"
                      value={this.state.userId}
                      onChange={this.changeUserIdHandler}
                    />
            </form>
            <div align="left" className="div">
              <Stack spacing={2} direction="row" className="div">
              <button
                    className="btn btn-success m-2"
                    onClick={this.saveHandler}
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
              </Stack>
            </div>
            <div>
            <label>.\</label>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
