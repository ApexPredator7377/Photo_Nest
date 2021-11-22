import React, { Component } from "react";
import AlbumService from "../services/AlbumService";

export default class AddAlbumComp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      photoId: "",
      userId: "",
      albumNo: "",
    };

    this.changePhotoIdHandler = this.changePhotoIdHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeAlbumNoHandler = this.changeAlbumNoHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }

  saveHandler = (sU) => {
    sU.preventDefault();
    let album = {
        photoId: this.state.photoId,
        userId: this.state.userId,
        albumNo: this.state.albumNo,
    };
    console.log("album=> " + JSON.stringify(album));

    AlbumService.createAlbum(album).then((res) => {
      this.props.history.push("/photos");
    });
  };

  changePhotoIdHandler(event) {
    this.setState({ photoId: event.target.value });
  }

  changeUserIdHandler(event) {
    this.setState({ userId: event.target.value });
  }

  changeAlbumNoHandler(event) {
    this.setState({ albumNo: event.target.value });
  }

  returnHandler() {
    this.props.history.push("/photos");
  }

  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div class="card col-md-6 ofsett-md-3 offset-md-3">
              <h3 className="text-centre p-2 div"> Add Album </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">

                    <label>Album No: </label>
                    <input
                      placeholder="E.g. 2"
                      name="albumNo"
                      className="form-control"
                      value={this.state.albumNo}
                      onChange={this.changeAlbumNoHandler}
                    />

                    <label>Photo Id: </label>
                    <input
                      placeholder="E.g. 3"
                      name="photoId"
                      className="form-control"
                      value={this.state.photoId}
                      onChange={this.changePhotoIdHandler}
                    />

                    <label>User Id: </label>
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
                    onClick={this.saveHandler}
                  >
                    Create
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