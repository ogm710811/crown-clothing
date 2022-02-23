import React, { Component } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUseProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await createUseProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} label='Display Name'
            name='displayName'
            type='text'
            value={displayName}
            required
          />
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
          <FormInput
            handleChange={this.handleChange} label='Confirm Password'
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            required
          />
          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
