import React, {useState} from 'react';

// import react router Dom Components
import { Routes, Route, useActionData } from 'react-router-dom';

// Import all components
import { Header, Footer, PageTitle, Login, Logout } from './components/common'

import './App.css';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {

    setCurrentForm(formName);

  }

  return (
    <div className="App">
      <Header />
      {/* <Login />  */}
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Logout />
      } 
        <Routes>
          <Route path='/contact' element= { <PageTitle title='contact'>Contact</PageTitle> } />
          <Route path='/portfolio' element= { <PageTitle title='portfolio'>Portfolio</PageTitle> } />
          <Route path='/about' element= { <PageTitle title='about'>About</PageTitle> } />
          <Route path='/' element= { <PageTitle title='home'>Home</PageTitle> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />