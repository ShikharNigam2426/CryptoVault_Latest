import React from 'react'
import './Styles/Landing.css'

const Landing = () => {
    return (
        <div className='Landing row container my-5 mx-auto'>
            <div className="col-lg-6 col-md-6 col-sm-12 left">
                <h2 className='tagLine'>The Best Trading Cryptocurrency Resource</h2>
                <p className='text-secondary'>Cryptography, encryption process of transforming information referred to as plaintext) using done.</p>
                <button className='btn btn-primary px-4 py-2'>Get Started</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 right">
                <img className='gif mt-3' src="https://cdn.dribbble.com/users/900374/screenshots/5342817/exchange_2.gif" alt="" />
            </div>
        </div>
    )
}

export default Landing