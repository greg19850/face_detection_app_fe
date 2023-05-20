import { useState } from 'react';

import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Stats from './Stats';
import FaceRecognition from './FaceRecognition';

function Home() {
  const [imgURL, setImgURL] = useState('');
  const [imgBox, setImgBox] = useState({});
  return (
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
    </div>
  );
}

export default Home;