import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Particle from './components/Particle';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';


import './App.css';


function App() {

  const [isSignedIn, setIsSignedIn] = useState(true);


  const handleSignIn = (value) => {
    setIsSignedIn(value);
  };

  return (
    <div className="App">
      <Particle />
      <Navigation
        isSignedIn={isSignedIn}
        handleSignIn={handleSignIn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn handleSignIn={handleSignIn} />} />
        <Route path="/register" element={<Register handleSignIn={handleSignIn} />} />
      </Routes>
    </div>
  );
}

export default App;
