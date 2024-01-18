import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import imageContact from '../../assests/2824345.png'
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_4j84a9s', 'template_v4a8467', formData, 'zUESG70vzoEGhFFBM')
            .then((response) => {
                console.log('Email sent!', response.status, response.text);
                // Reset form fields after successful submission (optional)
                setFormData({
                    name: '',
                    phone: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };
    return (
        <div className='Contact-info'>

            
            <form onSubmit={handleSubmit}>
                <h1>May I Help You ?....😃</h1>
                <h2>Contact Us</h2>
                <p> 👨‍💼 : We are at your service from Monday to Friday from 9 p.m. to 9 p.m.</p>
                <p>🚫 : Sunday off </p>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />
                <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Work Type"
                    required
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <img src={imageContact} />
            </div>
        </div>
    )
}

export default Contact
