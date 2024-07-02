import React, { useEffect } from 'react';
import '../cssfiles/Footer.css';
import { Link, useLocation } from 'react-router-dom';

const IconFooter = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Navigating to:', location.pathname);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="footer-row footer-bottom-container footer-justify-content-center">
      <div className="footer-col-3 footer-col-sm-2">
        <Link to="/ytvid" className="footer-link">
          <strong>Know More</strong>
          <img src="/vidicon.png" className="footer-icons" alt="About Icon" /><br />
        </Link>
      </div>
      <div className="footer-col-3 footer-col-sm-2">
        <Link to="/upvid" className="footer-link">
          <strong>Upload Video</strong>
          <img src="images/upload.png" className="footer-icons" alt="Home Icon" /><br />
        </Link>
      </div>
      <div className="footer-col-3 footer-col-sm-2">
        <Link to="/faq" className="footer-link">
          <strong>FAQ </strong>
          <img src="images/faq.png" className="footer-icons" alt="About Icon" /><br />
        </Link>
      </div>
      <div className="footer-col-3 footer-col-sm-2">
        <Link to="/contact" className="footer-link">
          <strong>Contact Us</strong>
          <img src="images/contact-us.png" className="footer-icons" alt="Home Icon" /><br />
        </Link>
      </div>
    </div>
  );
};

export default IconFooter;
