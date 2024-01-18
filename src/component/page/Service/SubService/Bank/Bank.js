import React from 'react'
import Bankimage from '../../../../assests/piggyBank.jpg'
import Card from '../../../../assests/davidCard.jpg'
import './Bank.css'

function Bank() {
  return (
    <div className='b-main'>
      <div className='Bank-item'>
        <div className='Bank-img'>
          <img className='BankImage' src={Bankimage}/>
          <img src={Card}/>
        </div>

        <div className='Bank-text'> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Bank
