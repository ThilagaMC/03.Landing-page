import './App.css';
import IntroImg from './Images/IntroImg.png';

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-details-left">
            <h1>Wherever you<br />are, you&apos;re better<br/>together.</h1>
            <p>Virtual office for remote teams</p>
            <button className="btn btn-dark btn-signup">Sign up for Free</button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="intro-img" src={IntroImg} alt="Introduction" />
        </div>
      </div>
    </div>
  );
}

export default Content;
