import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Stats from './components/Stats';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from 'react-tsparticles';



import './App.css';


function App() {

  return (
    <div className="App">

      <Navigation />
      <Logo />
      <Stats />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
