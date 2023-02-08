import React from 'react';
import Popcorn from "../assets/Popcorn.png";

function Footer() {
    return (
        <footer className='movie__container'>
        <div>
        <div className="footer">
          <img src={Popcorn} alt="" className="logo" />
          <ul className="links">
            <li className="link">Home</li>
            <li className="link">Movies</li>
            <li className="link">Most Popular</li>
          </ul>
        </div>
        <div className="footer__copyright">Copyright © Movie Heaven</div>
        </div>
      </footer>
    );
}

export default Footer;