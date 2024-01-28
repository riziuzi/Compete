// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 flex flex-col border">
      <div className="flex flex-1">
        <div className=" w-1/3 flex flex-col items-center">
          <h5 className='mb-5 text-skin-text200 font-bold'>Contact Information</h5>
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
        <div className="w-1/3 flex flex-col items-center">
          <h5 className='mb-5 text-skin-text200 font-bold'>Follow Me</h5>
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
        <div className="w-1/3">
          <h5 className='mb-5 text-skin-text200 font-bold'>Disclaimer</h5>
          <p className='text-skin-text100'>
            The information provided on this website (Compete) is for general informational purposes only. While we strive to keep the information up to date ... <a href="/disclaimer" className='text-blue-400'>more</a></p>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className='text-skin-text100 text-xs font-thin'>Copyright &copy; 2023 Compete. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
