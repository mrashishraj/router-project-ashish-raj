import React from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContextProvider"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      pass: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { id, pass } = this.state
    const { handleLogin } = this.context
    handleLogin(id, pass)
  }

  render() {
    const { id, pass } = this.state
    const { isLogin } = this.context
    if (isLogin) {
      return (
        < Redirect to="/" />)
    }
    return (
      <div style={{ padding: "50px", border: "1px solid black", marginBottom: "150px" }}>
        <form action="" onSubmit={this.handleLogin}>
          <label htmlFor="">Login id :- </label>
          <input type="text" name="id" value={id} onChange={this.handleChange} /> <br /><br />

          <label htmlFor="">Password :- </label>
          <input type="text" name="pass" value={pass} onChange={this.handleChange} /><br /><br />
          <input type="submit" value="Login" />
          {/* <button onClick={handleLogin(id, pass)} >Login</button> */}
        </form>
      </div>
    )
  }
}
Login.contextType = AppContext;
export default Login;
