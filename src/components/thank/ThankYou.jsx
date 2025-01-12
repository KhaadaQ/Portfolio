import React from 'react'
import '../../App.css'
import '../../index.css'
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h2>¡Gracias por tu mensaje!</h2>
            <p>Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo lo antes posible.</p>
            <Link to="/" className="back-home-button">Volver al Inicio</Link>
        </div>
    )
}

export default ThankYou