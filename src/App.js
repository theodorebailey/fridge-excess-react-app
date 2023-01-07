import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, PageTitle } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/portfolio' >
          </Route>
          <Route path='/About' >
          </Route>
          <Route path='/'>
          </Route>
        </Routes>
        <PageTitle>Home</PageTitle>
      <Footer />
    </div>
  );
}

export default App;

// <PageTitle title='home' />
// <PageTitle title='about' />
// <PageTitle title='portfolio' />