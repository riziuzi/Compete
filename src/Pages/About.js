import React from 'react';
import Navbar from '../Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">About Me</h2>
                <p className="card-text">
                  Hi there! I'm Rishi Shukla, a passionate developer and creator. I love building innovative applications that solve real-world problems and enhance user experiences.
                </p>
                <p className="card-text">
                  With a strong background in web development, I enjoy exploring new technologies and frameworks to stay at the forefront of the ever-evolving tech landscape.
                </p>
                <p className="card-text">
                  Connect with me on social media to stay updated on my latest projects and adventures:
                </p>
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faInstagram} />
                    {' '}
                    <a href="https://www.instagram.com/rishi18december/">Instagram</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGithub} />
                    {' '}
                    <a href="https://github.com/riziuzi">GitHub</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} />
                    {' '}
                    <a href="https://twitter.com/_Rishi_Shukla_">Twitter</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                    {' '}
                    <a href="https://www.facebook.com/rishi.shukla.167189/">Facebook</a>
                  </li>
                </ul>
                <p className="card-text">
                  Feel free to explore my GitHub repositories and get in touch if you have any collaboration ideas or just want to say hello!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
