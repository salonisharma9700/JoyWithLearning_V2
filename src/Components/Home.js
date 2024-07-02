import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/style.css';

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-12">
          <Link to='/ytvid'>
            {window.innerWidth <= 768 ? (
              <img src="phonehome.jpeg" alt="Background" className="home-background-image img-fluid" />
            ) : (
              <img src="homenew.jpeg" alt="Background" className="home-background-image img-fluid" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
