import React from 'react'
import '../../App.css'
import '../../index.css'
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h2>Thanks for your message!</h2>
            <p>Your message has been sent successfully, I will reply as soon as possible!</p>
            <Link to="/" className="back-home-button">Back</Link>
        </div>
    )
}

export default ThankYou