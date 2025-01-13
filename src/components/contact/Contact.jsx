import React, { useState } from 'react';
import '../../App.css';
import '../../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact">
            <h2>Contact me</h2>
            {/* Formulario conectado a FormSubmit con captcha desactivado y redirección */}
            <form
                className="contact-form"
                action="https://formsubmit.co/af95940ce56c933d8448dc98850db303"
                method="POST"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                {/* Desactivar CAPTCHA y redirigir a página de agradecimiento */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
                <button type="submit">Send message</button>
            </form>
        </section>
    );
};

export default Contact;
