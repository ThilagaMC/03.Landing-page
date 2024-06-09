import './App.css';
import Page1 from './Images/Page3Img.png';

function OneClickFeature() {
  return (
   <> <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="Content-img" src={Page1} alt="Introduction" />
        </div>
        <div className="col-md-6">
          <div className="content-details-right">
          <h2>Support video & screen share</h2>
            <ul>
              <li>Optinally move from audio to HD video</li>
              <li>Share your design, feature, and slides</li>
              <li>Securely encrypted & transmitted using WebRTC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OneClickFeature;
