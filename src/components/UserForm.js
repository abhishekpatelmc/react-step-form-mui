import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handel fields change
  handelChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return <div></div>;
  }
}

export default UserForm;
