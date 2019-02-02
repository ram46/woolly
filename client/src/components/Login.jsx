import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function LoginForm(props) {
  return (
    <div>
      <form className="auth" noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        className="userid"
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
        <TextField
          id="outlined-password-input"
          label="Password"
          className="pass"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" onClick={props.handleSubmit}>
          Login/Register
        </Button>
      </form>
    </div>
  )
}



class Login extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      login: false,
      name: ""
    }
  }

  handleSubmit(e) {
    console.log("i m clicked")
    this.setState({
      login: true
    })
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    var loginArea;
    if (this.state.login === false) {
      loginArea = <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    } else {
      loginArea = "Your are loggedin"
    }
    return (
      loginArea
    )
  }
}

export default Login