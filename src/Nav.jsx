import React from 'react';
import logo from './img/jrsu.png';
import "./Nav.css"
const Nav=()=>{
    return(
    <>
    <div className="header">
        <img src={logo} alt="pic"className="img"/>
        <p className="clgname"> JHARKHAND RAKSHA SHAKTI UNIVERSITY</p>
    </div>
    </>
    );
}
export default Nav;