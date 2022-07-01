import React from 'react'
import '../estilos/Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-info">
          <h1>Mario Enrique</h1>
          <p>Guatemala, Quiché</p>
        </div>
        <div className="footer-contact">
          <h3>Contact me</h3>
          <h3>(+502) - 4780-9501</h3>
          <p>And let's get down to work</p>
        </div>
        <div className="footer-sns">
          <div className="design-by">Mario Toj55</div>
          <div className="sns-links">
            <a href="https://www.linkedin.com/in/mario-toj-alvarez-417ab9229/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com/MarioE38767340" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://github.com/MarioToj" target="_blank" rel="noreferrer">
            <i className="fab fa-github twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;