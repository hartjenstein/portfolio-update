import React from 'react';
import LoginForm from './LoginForm';

export const LoginPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Hartjentein Portfolio</h1>
      <p>You need admin rights to be able to login</p>
      <LoginForm />
    </div>
  </div>
);


export default LoginPage;