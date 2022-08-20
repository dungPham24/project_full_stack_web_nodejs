import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import "./Login.scss";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import { handlerLogin } from "../../routes/services/userServiec";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMessage: "",
    };
  }

  handelChangeUser = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onClickLogin = async (e) => {
    e.preventDefault();
    this.setState({
      errMessage: "",
    });
    try {
      const data = await handlerLogin(this.state.email, this.state.password);

      if (data && data.errorCode !== 0) {
        this.setState({
          errMessage: data.errMessenger,
        });
      }
      if (data && data.errorCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
      console.log(data);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.messenger,
          });
        }
      }
    }
  };

  render() {
    return (
      <div className="backgroup-gadient">
        <form>
          <div className="brand">
            <img src="" alt="" />
            <h2>Login</h2>
          </div>
          <input
            type="text"
            id="email"
            placeholder="username"
            name="email"
            min="3"
            onChange={this.handelChangeUser}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handelChangeUser}
          />

          <div style={{ color: "#ffff" }}>{this.state.errMessage}</div>
          <button type="submit" onClick={this.onClickLogin}>
            login user
          </button>
          <span>
            Don't have an acccout? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
