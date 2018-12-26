import React from 'react';
import { firebase } from '../firebase/firebase';
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch(error => {
    
        this.setState(() => ({ error }));
        console.log("error!:",this.state.error)
      });
  }

  onEmailChange = (e) => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }

  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  render() {

    const isInvalid = this.state.password === '' || this.state.email === '' ? true : false;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={this.onEmailChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.state.password}
          onChange={this.onPasswordChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { this.state.error && <p>{'There is something wrong with your login credentials. Please try again!'}</p> }
      </form>
    );
  }
}

export default LoginForm;
