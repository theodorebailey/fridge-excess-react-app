// import react
import React from 'react';

// import {useHistory} from 'react-router-dom';

import { useState } from 'react';

import './Login.css';

// function Welcome(props) {

//   return 
  
// }


// function checkLogInStatus () {

//   let emailLogin = localStorage.getItem('emailLogin');

//   let passwordLogin = localStorage.getItem('passwordLogin');

//   if (emailLogin && passwordLogin) {



//   }


// }

function Login (props) {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

    // localStorage.setItem('email', JSON.stringify(email));
    // localStorage.setItem('password', JSON.stringify(pass));  

  }



  return (
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input value={email} type="email" placeholder="user@email.com" id="email" name="email"/>
        <label for="password">password</label>
        <input value={password} type="password" placeholder="********" id="password" name="password"/>
        <button onClick={props.on} type="submit" id='loginButton'>Login</button>
      </form>
  )

}

export default Login;
// export default function Login() {

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

// function handleSubmit(event) {

//     event.preventDefault();

//   }

//   return (

//     <div className="Login">

//       <Form onSubmit={handleSubmit}>

//         <Form.Group size="lg" controlId="email">

//           <Form.Label>Email</Form.Label>

//           <Form.Control

//             autoFocus

//             type="email"

//             value={email}

//             onChange={(e) => setEmail(e.target.value)}

//           />

//         </Form.Group>

//         <Form.Group size="lg" controlId="password">

//           <Form.Label>Password</Form.Label>

//           <Form.Control

//             type="password"

//             value={password}

//             onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>

//           Login

//         </Button>

//       </Form>

//     </div>

//   );

// }