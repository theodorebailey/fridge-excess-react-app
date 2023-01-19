// import react + store states user puts in
import React, { useState } from 'react';
import Login from '../login/Login';

// props allow parent components to send values or functions to children elements
export const Logout = (props) => {

  const [name, setName] = useState('John');

  const [email, setEmail] = useState('');
    
  

  // all forms require handleSubmission
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
            <label>Welcome, {name} </label>
            <label htmlFor="">{email}</label>
            <button onClick={() => props.onFormSwitch('login')} type="submit" id='loginButton'>Logout</button>
          </form>
        </>
    )
}

{/* <input value={props.name} name="name" id="name" placeholder="fullname"></input> */}
{/* <label htmlFor="email">email</label>
<input value={props.email} type="email" placeholder={email} id="email" name="email"/> */}
{/* <label htmlFor="password">password</label>
<input value={password} type="password" placeholder="********" id="password" name="password"/> */}

export default Logout;