// Import file
import Login from './Login';

// const loginButton = document.getElementById('loginButton');
// loginButton.className = 'notClicked';

// let loginClicked = false;

// loginButton.addEventListener('click', () => {

//     if (!loginClicked) {

//         loginClicked = true;





//     }


    

// })

function Welcome(props) {
    return <h1>Welcome back {props.name}!</h1>;
}

function SignUp() {
    return <button type="button">Sign in</button>;
}



// Export file
export default Login;