import React from 'react'
import './Service.css'

import Legal from '../../assests/compliant.png'
import Goverment from '../../assests/goverment.png'
import Stamp from '../../assests/stamp.png'
import Lawer from '../../assests/lawyer.png'
import Bank from '../../assests/bank.png'
import Loan from '../../assests/loan.png'
import Card from '../../assests/atm-card.png'
import Insurance from '../../assests/insurance.png'
import Family from '../../assests/family-law.png'
import Criminal from '../../assests/convicted.png'
import { Link } from 'react-router-dom'
function Service() {
    return (
        <div className='Services'>
            <h1>🤝 Our Services & Actions</h1>
            <div className='Services-contaner'>
                <div className='services-line1'>

                    <Link to='form1/'><div className='service'><img src={Legal} alt='Legal' />Legal-Doc</div></Link>

                    <Link to='form2/'><div className='service'><img src={Goverment} alt='Goverment' />Gov-Document</div></Link>

                    <Link to=''><div className='service'><img src={Stamp} alt='Stamp' />E-Stamp</div></Link> 

                    <Link to='form4/'><div className='service'><img src={Lawer} alt='Lawer' />Legal Work</div></Link>

                    <Link to='form4/'><div className='service'><img src={Family} alt='Family Court' />Family Court</div></Link>

                </div>

                <div className='services-line2'>

                    <Link to='form4/'><div className='service'><img src={Criminal} alt='Criminal Court' />Criminal Court</div></Link>

                    <Link to='form5/'><div className='service'><img src={Bank} alt='Bank' />Bank Account</div></Link>

                    <Link to='form5/'><div className='service'><img src={Card} alt='Card' />Creadit-Card</div></Link>

                    <Link to='form5/'><div className='service'><img src={Loan} alt='Loan' />Loan</div></Link>

                    <Link to='form5/'><div className='service'><img src={Insurance} alt='Insurance' />Insurance</div></Link>

                </div>
            </div>
        </div>
    )
}

export default Service
