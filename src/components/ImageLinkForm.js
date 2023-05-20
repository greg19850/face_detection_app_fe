import { useState } from 'react';
import '../styles/ImageLinkForm.css';

function ImageLinkForm({ setImgURL, setImgBox }) {
  const [input, setInput] = useState('');


  function handleInputChange(e) {
    setInput(e.target.value);

  }

  function submitImage() {
    setImgURL(input);

    const IMAGE_URL = input;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key '.concat('030808f58f564da992caa6a52897ac8f')
      },
      body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
      .then(response => response.json())
      .then(data => calculatFaceLocation(data))
      .catch(error => console.log('error', error));
  }

  function calculatFaceLocation(data) {
    const capturedFace = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('inputImage');
    const imgWidth = image.width;
    const imgHeight = image.height;
    const faceBox = {
      leftCol: capturedFace.left_col * imgWidth,
      topRow: capturedFace.top_row * imgHeight,
      rightCol: imgWidth - (capturedFace.right_col * imgWidth),
      bottomRow: imgHeight - (capturedFace.bottom_row * imgHeight),
    };
    setImgBox(faceBox);
  }

  return (
    <div>
      <p className="f3">{'Detect faces in your pictures in seconds!'}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={submitImage}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;