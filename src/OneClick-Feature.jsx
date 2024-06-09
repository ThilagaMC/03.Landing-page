import './App.css';
import Page1 from './Images/Page1Img.png';

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
            <h2>One Click to talk</h2>
            <ul>
              <li>Jump into audio rooms with single click</li>
              <li>Securely encrypted & transmitted using webRTC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OneClickFeature;
