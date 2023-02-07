import React from 'react';
import Popcorn from '../assets/Popcorn.jpeg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {

    return (
        <nav>
            <div className='nav__container'>
                <img src={Popcorn} alt="" className='logo'/>
                <div className='nav__search'>
                    <input type="text" placeholder="Search.." ></input>
                    <FontAwesomeIcon icon="play" className='search__icon'/>
                </div>
                <ul className='nav__link'> 
                    <li className='nav__icon--1'>
                         <FontAwesomeIcon icon="video"/>
                    </li>
                    <li className='nav__icon'>
                         <FontAwesomeIcon icon="film"/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;