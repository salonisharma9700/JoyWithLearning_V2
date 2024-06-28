import React from 'react';
import '../cssfiles/style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="container-fluid home-container">
      <div className="row">
        <div className='ho' col-15 col-sm-3>
          <Link to='/ytvid'>
              <img src="home.png"  alt="Background" className="home-background-image" />
          </Link>
        </div>  
        {/* <div className="home-overlay-text" text-black fw-bold   >
          <p>Supporting</p>
          <p>Your Journey with</p>
          <p>Autism and Dyslexia</p>
        </div> */}
        
      </div>
    </div>
  );
}

export default Home;
