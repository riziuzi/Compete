// Disclaimer.js

import React from 'react';
import './Disclaimer.css';
import Footer from '../Components/Footer';
import { Nav2 } from '../Components/Navbars/Navbars';

const Disclaimer = () => {
  return (
    <>
      <Nav2 />
      <div className="disclaimer-container">
        <h1>Disclaimer</h1>
        <p>
          The information provided on this website (Compete) is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>

        <p>
          In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the loss of data or profits arising out of, or in connection with, the use of this website.
        </p>

        <p>
          Through this website, you are able to link to other websites that are not under the control of Compete. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
        </p>

        <p>
          Every effort is made to keep the website up and running smoothly. However, Compete takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
        </p>

        <p>
          The content provided on this website is intended for general informational purposes and should not be considered as professional advice. It is advised to seek appropriate professional guidance for your specific situation.
        </p>

        <p>
          Compete reserves the right to change, modify, or update this disclaimer at any time without notice. It is your responsibility to check this page periodically for changes.
        </p>

        <p>
          By using this website, you agree to the terms of this disclaimer. If you do not agree with the terms, please refrain from using our website. If you have any questions about this disclaimer, please contact us.
        </p>

        <div className="contact-info">
          <p>Website name: Compete</p>
          <p>Contact info: <a href="mailto:rishiseco@gmail.com">rishiseco@gmail.com</a></p>
          <p>Tel: <a href="tel:+917376026529">+91 7376026529</a></p>
          <p>Created by: Rishi Shukla</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
