import React from 'react';
import Footer from '../Components/Footer';
import { Nav2 } from '../Components/Navbars/Navbars';

const Disclaimer = () => {
  return (
    <>
      <Nav2 />
      <div className="container w-2/3 border border-green-700 rounded-lg items-center shadow-green-400 shadow-md mb-16 mx-auto mt-10">
        <div className="p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 w-full flex justify-center">Disclaimer</h1>
          <p className="mb-4 text-skin-text100 font-sans">
            The information provided on this website MindScape India is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <p className="mb-4 text-skin-text100 font-sans">
            In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          {/* Repeat the pattern for other paragraphs */}

          <div >
            <p className="mb-4 text-skin-text100 font-sans">
              By using this website, you agree to the terms of this disclaimer. If you do not agree with the terms, please refrain from using our website. If you have any questions about this disclaimer, please contact us.
            </p>
          </div>

          <div className="contact-info ">
            <p className="mb-4 text-skin-text100 font-sans">Website name: Compete</p>
            <p className="mb-4 text-skin-text100 font-sans">Contact info: <a href="mailto:rishiseco@gmail.com">rishiseco@gmail.com</a></p>
            <p className="mb-4 text-skin-text100 font-sans">Tel: <a href="tel:+917376026529">+91 7376026529</a></p>
            <p className="mb-4 text-skin-text100 font-sans">Created by: Rishi Shukla</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
