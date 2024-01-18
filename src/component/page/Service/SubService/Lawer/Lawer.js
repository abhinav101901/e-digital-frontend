import React from 'react'
import lawHammer from '../../../../assests/hammerJustice.jpg'
import lawBook from '../../../../assests/lawBook.jpg'
import './Lawer.css'


function Lawer() {
  return (
    <div className='l-main'>
      <div className="Lawer-main">
       <div className='Lawer-image'>
       <img className='LawerImage' src={lawHammer}/>
       <img src={lawBook}/>
       </div>
        <div className="Lawer-contaner">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
      
    </div>
  )
}

export default Lawer
