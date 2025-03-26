import React from 'react'
import pdm_icon from '../../assets/logo.png'
import '../../components/all-styles.css'
import { useEffect } from 'react';



export const Header = ({ title }) => {

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className="header">
            {/* Logo and Navigation Bar  */}
            <div className="logoimg">
                <a href="#head" className="logo">
                    <img src={pdm_icon} alt="logo" />
                    <i className='bx bx-menu' id="menu-icon"><span className="animate"></span></i>
                </a>
                <span> My PDM Tutor </span>
            </div>
            
            <nav className="navbar">
                <a href={'home'} className="active"> Home </a>
                <a href={'#about'}> About </a>
                <a href={'#agenda'}> Agenda </a>
                <a href={'#contact-us'}> Contact Us </a>
                <a href={'#connect'}> Connect with Us </a>
                
                <div className="nav-buttons">
                    <a className="btn-login" href={'login'}> Login </a>
                    <a className="btn-reg" href={'register'}> Register </a>
                </div>
                
                <span className="active-nav"></span>
                <span className="animate"></span>
            </nav>
    </header>
    )
}
