import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGlobe, faPerson, faAddressBook } from '@fortawesome/free-solid-svg-icons'

import Header from "../Header/Header"
import Navigation from '../Navigation/NavBar'
import Slideshow from "../Slideshow/SlideshowImage"
import Service from "../Service/Service"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from '../Footer/Footer'

import Logo from '../../assests/A.A.png'
import './NavBar.css'

function NavBar() {
    const services = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <Header />
            <nav id="navbar" class="">
                <div class="nav-wrapper">
                    <div class="logo"><img src={Logo} /></div>
                    <ul id="menu">
                        <li><Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
                        <li onClick={() => scrollToSection(services)}><a><FontAwesomeIcon icon={faGlobe} /> Services</a></li>
                        <li onClick={() => scrollToSection(about)}><a><FontAwesomeIcon icon={faPerson} /> About</a></li>
                        <li onClick={() => scrollToSection(contact)}><a><FontAwesomeIcon icon={faAddressBook} /> Contact</a></li>
                    </ul>
                </div>
            </nav>
            <Slideshow />
            <div ref={services} className='services'>
                <Service />
            </div>
            <div ref={about} className='about'>
                <About />
            </div>
            <div ref={contact} className='contect'>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default NavBar
