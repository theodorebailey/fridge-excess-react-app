import React, { useState } from 'react';

export const Logout = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');

    const handleSubmit = (event) => {
      // declare prevent dafault to refuse page reload
      event.preventDefault();
      console.log(email);
  
      // localStorage.setItem('email', JSON.stringify(email));
      // localStorage.setItem('password', JSON.stringify(password));  
  
    }


    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="user@email.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password"/>
            <button onClick={() => props.onFormSwitch('login')} type="submit" id='logoutButton'>Logout</button>
          </form>
        </>
    )

}

export default Logout;