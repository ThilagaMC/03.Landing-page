import './App.css';
import ImagesPage from './Images/Page2Img.png'

function Content() {
  return (
    <> <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="content-details-left">
          <h2>Build your avatar</h2>
            <ul>
                <li>Choose whether yout door is open or close</li>
                <li>See the room in your office</li>
                <li>Join the #water-coller room to chat about personal life</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img className="Content-img" src={ImagesPage} alt="Introduction" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Content;
