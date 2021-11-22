import React, { Component } from "react";
import ShareService from "../services/ShareService";

export default class AddShareComp extends Component {
    constructor(props) {
      super(props);
  
    this.state = {

      userIdOrigin: "",
      userIdDestination: "",
      photoId: "",
    };

    this.changeOriginHandler = this.changeOriginHandler.bind(this);
    this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
    this.changePhotoIdHandler = this.changePhotoIdHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }

  saveHandler = (sU) => {
    sU.preventDefault();
    let share = {
        userIdOrigin: this.state.userIdOrigin,
        userIdDestination: this.state.userIdDestination,
        photoId: this.state.photoId,
    };
    console.log("share=> " + JSON.stringify(share));

    ShareService.createShare(share).then((res) => {
      this.props.history.push("/users");
    });
  };

  changeOriginHandler(event) {
    this.setState({ userIdOrigin: event.target.value });
  }

  changeDestinationHandler(event) {
    this.setState({ userIdDestination: event.target.value });
  }

  changePhotoIdHandler(event) {
    this.setState({ photoId: event.target.value });
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
              <h3 className="text-centre p-2 div"> Share </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">

                    <label>Photo Id: </label>
                    <input
                      placeholder="E.g. 7"
                      name="photoId"
                      className="form-control"
                      value={this.state.photoId}
                      onChange={this.changePhotoIdHandler}
                    />

                    <label>From User With Id: </label>
                    <input
                      placeholder="E.g. 4 - Peter"
                      name="userIdOrigin"
                      className="form-control"
                      value={this.state.userIdOrigin}
                      onChange={this.changeOriginHandler}
                    />

                    <label>To User With Id: </label>
                    <input
                      placeholder="E.g. 7 - Clair"
                      name="userIdDestination"
                      className="form-control"
                      value={this.state.userIdDestination}
                      onChange={this.changeDestinationHandler}
                    />

                  </div>
                  <button
                    className="btn btn-success m-2"
                    onClick={this.saveHandler}
                  >
                    Share
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