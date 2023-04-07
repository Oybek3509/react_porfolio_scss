import React from 'react';
import "./index.scss";
import imga from "../../assets/images/logos.svg";
function Header() {
    return (
        <>
            <header className='Header'>
                
            <nav className="nav">
                        <a className="nav_title" href="#">
                          <a href="#"><img src={imga} alt="" /></a>
                        </a>
                        <ul className="nav_list">
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <img className="burger"  alt="" />
                    </nav>


                
            </header>
        </>
    );
}

export default Header;