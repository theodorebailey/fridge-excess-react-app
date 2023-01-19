// import react + store states user puts in
import React,{ useState } from 'react';
// import { useState } from 'react';

// import {useHistory} from 'react-router-dom';

import './Login.css';


export const Login = (props) => {

  // array destructering
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail({email});

    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));  

  }



  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder="Full name" id="name" name="name"/>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="user@email.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button onClick={() => props.onFormSwitch('logout')} type="submit" id='loginButton'>Login</button>
      </form>
  )

}

export default Login;
