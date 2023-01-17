// import react
import React,{ useState } from 'react';
// import { useState } from 'react';

// import {useHistory} from 'react-router-dom';

import './Login.css';


export const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

    // localStorage.setItem('email', JSON.stringify(email));
    // localStorage.setItem('password', JSON.stringify(pass));  

  }



  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="user@email.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button onClick={() => props.onFormSwitch('logout')} type="submit" id='loginButton'>Login</button>
      </form>
  )

}

export default Login;
