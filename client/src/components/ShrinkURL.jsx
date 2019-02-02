import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ShrinkURL extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <TextField
      id="outlined-url"
      label="URL"
      className="urlshrink"
      onChange={props.handleChange}
      margin="normal"
      variant="outlined"
    />
    )
  }
}




export default ShrinkURL