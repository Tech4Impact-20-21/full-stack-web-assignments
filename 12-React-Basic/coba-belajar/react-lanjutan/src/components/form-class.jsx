import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.currentTarget.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onChangeName}
          placeholder="Your name"
        />
        <input
          type="email"
          value={this.state.email}
          onChange={this.onChangeEmail}
          placeholder="Your email"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.onChangePassword}
          placeholder="Your password"
        />
        <button type="submit">Sumit</button>
      </form>
    );
  }
}
