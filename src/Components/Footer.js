// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer--pin'>
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <a href="mailto:rishiseco@gmail.com" target="_blank">rishiseco@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />{' '}
                <a href="tel:+917376026529" target="_blank">+91 7376026529</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                Varanasi, India
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faLinkedin} />{' '}
                <a href="https://www.linkedin.com/in/riziuzi/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />{' '}
                <a href="https://github.com/riziuzi" target="_blank">GitHub</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
                {' '}
                <a href="https://www.instagram.com/rishi18december/" target="_blank">Instagram</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />{' '}
                <a href="https://twitter.com/_Rishi_Shukla_" target="_blank" >Twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Disclaimer</h5>
            <p>
            The information provided on this website (Compete) is for general informational purposes only. While we strive to keep the information up to date ... <a href="/footer/disclaimer" target = "_blank">more</a></p>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>Copyright &copy; 2023 Compete. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
