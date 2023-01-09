import React from 'react';

// import react router Dom Components
import { Routes, Route } from 'react-router-dom';

// Import all components
import { Header, Footer, PageTitle, Login } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login /> 
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