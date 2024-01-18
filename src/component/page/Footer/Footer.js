import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'
import footer from '../../assests/27050.jpg'
import logo from '../../assests/A.A.png'
import './Footer.css'

function Footer() {
  return (

    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>

      <div class="footer-distributed">

        <div class="footer-left">
          <img src={logo} />
        </div>

        <div class="footer-center">

          <div className='fontIcon'>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>U Block Govind Nagar Kanpur</p>
          </div>

          <div className='fontIcon'>
            <FontAwesomeIcon icon={faPhone} />
            <p>+91-6307290539</p>
          </div>

          <div className='fontIcon'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p><a href="mailto:abhi1020.kanpur@gmail.com">abhi1020.kanpur@gmail.com</a></p>
          </div>

        </div>

        <div class="footer-right">
          <p1>About Our Team</p1>
          <p>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

        </div>

      </div>

      <h4>Developed by Abhinav Gupta © 2024</h4>





    </footer>
  )
}

export default Footer
