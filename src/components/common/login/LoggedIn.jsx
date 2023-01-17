import React, { useState } from 'react';

export const LoggedIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email);
  
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('password', JSON.stringify(password));  
  
    }


    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="user@email.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password"/>
            <button onClick={props.on} type="submit" id='loginButton'>Log out</button>
          </form>
        </>
    )

}