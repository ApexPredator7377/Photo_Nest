import React, { Component } from "react";
import { Paper } from "@mui/material";

export default class FooterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <div>
          <footer className="footer">
            <span className="text-muted"> All Rights Reserved 2021 @PhotoNest</span>
          </footer>
        </div>
      </Paper>
    );
  }
}