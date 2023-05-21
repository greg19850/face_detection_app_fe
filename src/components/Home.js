import { useState } from 'react';

import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Stats from './Stats';
import FaceRecognition from './FaceRecognition';

function Home({ isSignedIn }) {
  const [imgURL, setImgURL] = useState('');
  const [imgBox, setImgBox] = useState([]); //Face box for detected faces

  return (
    isSignedIn ?
      <div>
        <Logo />
        <Stats />
        <ImageLinkForm
          setImgURL={setImgURL}
          setImgBox={setImgBox}
        />
        <FaceRecognition
          imgURL={imgURL}
          imgBox={imgBox}
        />
      </div> :
      <div className='welcome-msg'>
        <h2 className="f2" >Welcome! Please sign in</h2>
      </div>
  );
}

export default Home;