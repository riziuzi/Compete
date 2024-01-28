import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Components/Footer';
import { Nav2 } from '../Components/Navbars/Navbars';

const About = () => {
  return (
    <div>
      <Nav2 />
      <div className="mx-auto w-1/2 mt-8 mb-48">
        <div className="border border-green-700 rounded-lg items-center shadow-green-400 shadow-md px-8 pt-6 pb-8 mb-4 p-36">
          <h2 className="text-2xl text-center mb-4 text-skin-text200 font-sans font-bold">About Me</h2>
          <p className="mb-4 text-skin-text100 font-sans">
            Hi there! I'm Rishi Shukla, a passionate developer and creator. I love
            building innovative applications that solve real-world problems and
            enhance user experiences.
          </p>
          <p className="mb-4 text-skin-text100 font-sans">
            With a strong background in web development, I enjoy exploring new
            technologies and frameworks to stay at the forefront of the
            ever-evolving tech landscape.
          </p>
          <p className="mb-4 text-skin-text100 font-sans">Connect with me on social media:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              <a href="https://www.instagram.com/rishi18december/">Instagram</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <a href="https://github.com/riziuzi">GitHub</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              <a href="https://twitter.com/_Rishi_Shukla_">Twitter</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              <a href="https://www.facebook.com/rishi.shukla.167189/">Facebook</a>
            </li>
          </ul>
          <p className="mb-4 text-skin-text100 font-sans">
            Feel free to explore my GitHub repositories and get in touch if you
            have any collaboration ideas or just want to say hello!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
