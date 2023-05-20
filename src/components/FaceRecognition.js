import '../styles/FaceRacognition.css';

function FaceRecognition({ imgURL, imgBox }) {

  const faceDetectionBoxes = imgBox.map(face => {
    return <div
      key={face.topRow}
      className="bounding-box"
      style={{
        top: face.topRow,
        right: face.rightCol,
        bottom: face.bottomRow,
        left: face.leftCol
      }}>
    </div>;
  });

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imgURL} alt="" width='500px' height='auto' />
        {faceDetectionBoxes}
      </div>
    </div>
  );
}

export default FaceRecognition;