import React from 'react';
import Logo from '../Logo/Logo'
import github from './github-logo.png';
import linkedin from './linkedin-logo.png';
import twitter from './twitter-logo.png';
import './Footer.css';

const Footer = () => {
    return (
       <footer>
           <h4>FaceIt</h4>
             <h5>is brought to you by</h5>
              <div className="dev-container">
                <div className="dev">
                  <p>Kelsie Besinger Yeh</p>
                  <div className="links">
                    <a href="https://github.com/kelsiebesingeryeh/"><img src={github} alt='Kelsie GitHub' /></a>
                    <a href="https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/"><img src={linkedin} alt='Kelsie LinkedIn' /></a>
                  </div>
                </div>
                <div className="dev">
                  <p>Connie Hong </p>
                  <div className="links">
                    <a href="https://github.com/conconartist"><img src={github} alt='Connie GitHub' /></a>
                    <a href="https://www.linkedin.com/in/connie-h-hong/"><img src={linkedin} alt='Connie LinkedIn' /></a>
                    <a href="https://twitter.com/conconartist?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false"><img src={twitter} alt='Connie Twitter' /></a>
                  </div>
                </div>
                <div className="dev">
                  <p>Gabrielle Joyce</p>
                  <div className="links">
                    <a href="https://github.com/gaj23"><img src={github} alt='Gabrielle GitHub' /></a>
                    <a href="https://www.linkedin.com/in/gaj23/"><img src={linkedin} alt='Gabrielle LinkedIn' /></a>
                  </div>
                </div>
              </div>
              <Logo />
       </footer>
    )
}

export default Footer;
