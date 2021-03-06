import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';  //react v15.5  React.PropTypes -> PropTypes
import { createReactClass } from 'create-react-class'; //from React V15.5 추가

export default class Authentication extends React.Component {
//export default class Authentication extends createReactClass {
  constructor(props) {
      super(props);

      this.state = {
          username: "",
          nickname: "",
          password: "",
          groupname: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.callLogin = this.callLogin.bind(this);
      this.callRegister = this.callRegister.bind(this);
  }

  handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleKeyPress(e) {
      if(e.charCode==13) {
          if(this.props.mode) {
              this.callLogin();
          } else {
              this.callRegister();
          }
      }
  }

  callLogin() {
        let username = this.state.username;
        let password = this.state.password;

  }

  callRegister() {
    let username = this.state.username;
    let nickname = this.state.nickname;
    let password = this.state.password;
    let groupname = this.state.groupname;

    this.props.onRegister(username, nickname, password, groupname);
  }


    render() {

      const inputBox1 = (
              <div className="input-field col s12 username">
                  <label>Email</label>
                  <input
                  name="username"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.username} />
              </div>
      );

      const inputBox2 = (
              <div className="input-field col s12">
                  <label>Nickname</label>
                  <input
                  name="nickname"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.nickname} />
              </div>
      );

      const inputBox3 =(
              <div className="input-field col s12">
                  <label>Password</label>
                  <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password} />
              </div>
      );

      const inputBox4 =(
              <div className="input-field col s12">
                  <label>Group Name</label>
                  <input
                  name="groupname"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.groupname}
                  onKeyPress={this.handleKeyPress}  />
              </div>
      );

      const loginView = (
          <div>
              <div className="card-content">
                  <div className="row">
                      {inputBox1}
                      {inputBox3}
                      <a className="waves-effect waves-light btn"
                      onClick={this.callLogin}>SUBMIT</a>
                  </div>
              </div>

              <div className="footer">
                  <div className="card-content">
                      <div className="right" >
                      New Here? <Link to="/register">Create an account</Link>
                      </div>
                  </div>
              </div>

          </div>
      );

      const registerView = (
          <div className="card-content">
              <div className="row">
                  {inputBox1}
                  {inputBox2}
                  {inputBox3}
                  {inputBox4}
                  <a className="waves-effect waves-light btn"
                    onClick={this.callRegister}>CREATE</a>
              </div>
          </div>
      );

      return (
        <div className="auth">
            <div className="card hoverable">
                <div className="header blue white-text center">
                    <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
                </div>
                {this.props.mode ? loginView : registerView }
            </div>
        </div>
      );

    }  // render
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};
