import React, { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './sign-in.styles.scss';
import { auth, singInWithGoogle } from '../../firebase/firebase.utils';
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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: '', password: '' });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sing-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} label='Email'
            name='email'
            type='email'
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange} label='Password'
            name='password'
            type='password'
            value={password}
            required
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
