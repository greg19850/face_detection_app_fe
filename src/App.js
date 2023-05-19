import { useState } from 'react';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Stats from './components/Stats';
// import ParticlesBg from 'particles-bg';
import Particle from './components/Particle';


import './App.css';


function App() {

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });
  const [userInput, setUserInput] = useState('');
  const [imgURL, setImgURL] = useState('');

  return (
    <div className="App">
      {/* <ParticlesBg
        color='#fff'
        num={100}
        type="cobweb"
        bg={true}
      /> */}
      <Particle />
      <Navigation />
      <Logo />
      <Stats />
      <ImageLinkForm
        user={user}
        userInput={userInput}
        setUserInput={setUserInput}
        imgURL={imgURL}
        setImgURL={setImgURL}
      />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
