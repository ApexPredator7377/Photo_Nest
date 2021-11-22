import React, { Component } from "react";
import PhotoService from "../services/PhotoService";

export default class UpdatePhotoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
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
    this.updateHandler = this.updateHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }

  componentDidMount() {
    PhotoService.getPhotoById(this.state.id).then((res) => {
      let photo = res.data;
      this.setState({
        photoURL: photo.photoURL,
        photoFileType: photo.photoFileType,
        photoDateCreated: photo.photoDateCreated,
        userId: photo.userId,
      });
    });
  }

  updateHandler = (e) => {
    e.preventDefault();
    let photo = {
      photoURL: this.state.photoURL,
      photoFileType: this.state.photoFileType,
      photoDateCreated: this.state.photoDateCreated,
      userId: this.state.userId,
    };
    console.log("photo => " + JSON.stringify(photo));
    console.log("id => " + JSON.stringify(this.state.id));

    PhotoService.updatePhoto(photo, this.state.id).then((res) => {
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

  returnHandler() {
    this.props.history.push("/photos");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container p-5">
          <div className="row">
            <div class="card col-md-6 ofsett-md-3 offset-md-3">
              <h3 className="text-centre p-2"> Edit Photo</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                  <label>URL: </label>
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

                  </div>
                  <button
                    className="btn btn-success m-2"
                    onClick={this.updateHandler}
                  >
                    Confirm
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