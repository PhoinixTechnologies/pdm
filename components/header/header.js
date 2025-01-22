import Link from 'next/link'
import React from 'react'
import pdm_icon from '../../public/assets/icons/pdm.png'
import Image from 'next/image'
import '../../components/all-styles.css'


export default function Header() {
    return (
        <header className="header">
            {/* Logo and Navigation Bar  */}
            <div className="logoimg">
                <a href="#" className="logo">
                    <Image src={pdm_icon} alt="logo" />
                    <i className='bx bx-menu' id="menu-icon"><span className="animate"></span></i>
                </a>
                <span> My PDM Tutor </span>
            </div>
            
            <nav className="navbar">
                <Link href={'home'} className="active"> Home </Link>
                <Link href={'aboutt'}> About </Link>
                <Link href={'agenda'}> Agenda </Link>
                <Link href={'contact-us'}> Contact Us </Link>
                <Link href={'connect'}> Connect with Us </Link>
                
                <div className="nav-buttons">
                    <Link className="btn-login" href={'#'}> Login </Link>
                    <Link className="btn-reg" href={'#'}> Register </Link>
                    <Link href={'#'}> Check </Link>
                </div>
                
                <span className="active-nav"></span>
                <span className="animate"></span>
            </nav>
    </header>
    )
}
