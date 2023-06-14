import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Particle from './components/Particle';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
// import { getUser } from './utils/api';


import './App.css';


function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  });
  const [signinMessage, setSigninMessage] = useState('Welcome! Please sign in')


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
        <Route path="/"
          element={
            <Home
              loggedUser={loggedUser}
              setLoggedUser={setLoggedUser}
              isSignedIn={isSignedIn}
              signinMessage={signinMessage}
            />
          }
        />
        <Route path="/signin" element={<SignIn handleSignIn={handleSignIn} setLoggedUser={setLoggedUser} setSigninMessage={setSigninMessage} />} />
        <Route path="/register" element={<Register handleSignIn={handleSignIn} setLoggedUser={setLoggedUser} setSigninMessage={setSigninMessage} />} />
      </Routes>
    </div>
  );
}

export default App;
