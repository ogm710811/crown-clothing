import React from 'react';

import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const Sign = () => {
  return (
    <div className='sign'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;

