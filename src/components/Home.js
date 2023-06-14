import { useState } from 'react';

import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Stats from './Stats';
import FaceRecognition from './FaceRecognition';

function Home({ loggedUser, setLoggedUser, isSignedIn, signinMessage }) {
  const [imgURL, setImgURL] = useState('');
  const [imgBox, setImgBox] = useState([]); //Face box for detected faces

  return (
    isSignedIn ?
      <div>
        <Logo />
        <Stats loggedUser={loggedUser} />
        <ImageLinkForm
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          setImgURL={setImgURL}
          setImgBox={setImgBox}
        />
        <FaceRecognition
          imgURL={imgURL}
          imgBox={imgBox}
        />
      </div> :
      <div className='welcome-msg'>
        <h2 className="f2" >{signinMessage}</h2>
      </div>
  );
}

export default Home;