import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt='' />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Do you want to know more about my projects?</p>
                    <p>Do you have any suggestions? Let me know!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' />
                            <p>mihnea@rad-limited.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt='' />
                            <p>Belgium, Waloon Region</p>
                        </div>
                    </div>
                </div>

                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <button className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
