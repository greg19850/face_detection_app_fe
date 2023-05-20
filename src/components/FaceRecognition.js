import '../styles/FaceRacognition.css';

function FaceRecognition({ imgURL, imgBox }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imgURL} alt="" width='500px' height='auto' />
        <div
          className="bounding-box"
          style={{
            top: imgBox.topRow,
            right: imgBox.rightCol,
            bottom: imgBox.bottomRow,
            left: imgBox.leftCol
          }}>
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;