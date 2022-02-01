import React, { Component } from 'react';

import './sign-in.styles.scss';
import { singInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sing-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} label='Email' name='email'
            type='email' value={this.state.email} required
          />
          <FormInput
            handleChange={this.handleChange} label='Password' name='password'
            type='password' value={this.state.password} required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn>Sign in with
              Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
