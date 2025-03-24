import React from 'react'
import pdm_icon from '../../assets/logo.png'
import '../../components/all-styles.css'
import { Link } from 'react-router-dom'
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
                <Link href={'home'} className="active"> Home </Link>
                <Link href={'about'}> About </Link>
                <Link href={'agenda'}> Agenda </Link>
                <Link href={'contact-us'}> Contact Us </Link>
                <Link href={'connect'}> Connect with Us </Link>
                
                <div className="nav-buttons">
                    <Link className="btn-login" href={'login'}> Login </Link>
                    <Link className="btn-reg" href={'register'}> Register </Link>
                </div>
                
                <span className="active-nav"></span>
                <span className="animate"></span>
            </nav>
    </header>
    )
}
