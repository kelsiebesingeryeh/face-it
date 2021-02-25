import React from 'react';
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
                    <a href="https://github.com/kelsiebesingeryeh/">Github</a>
                    <a href="https://www.linkedin.com/in/kelsie-besinger-yeh-80947132/">LinkedIn</a>
                  </div>
                </div>
                <div className="dev">
                  <p>Connie Hong </p>
                  <div className="links">
                    <a href="https://github.com/conconartist">Github</a>
                    <a href="https://www.linkedin.com/in/connie-h-hong/">LinkedIn</a>
                    <a href="https://twitter.com/conconartist?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Twitter</a>
                  </div>
                </div>
                <div className="dev">
                  <p>Gabrielle Joyce</p>
                  <div className="links">
                    <a href="https://github.com/gaj23">Github</a>
                    <a href="https://www.linkedin.com/in/gaj23/">LinkedIn</a>
                  </div>
                </div>
              </div>
       </footer> 
    )
}

export default Footer;