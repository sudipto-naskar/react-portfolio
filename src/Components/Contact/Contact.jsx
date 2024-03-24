import React, { useState } from 'react'
import "./Contact.css"

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import cimg from "../../img/cimg.png";
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbht22e', 'template_gwxivlf', form.current, 'SX4Uwd3cqoqsL2iFw')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact-me" id='Contact'>
            <div className="container">
                <div className="item">
                    <div className="contact">
                        <div className="first-text">Let's get in touch</div>
                        <div className="c-us">
                            <img src={cimg} alt="" />
                        </div>
                        <div className="social-links">
                            <span className="secnd-text">Connect With Me:</span>
                            <div className="social-media">
                                <a href='https://github.com/sudipto-naskar'>
                                    <Github color='var(--orange)' size='2.4rem' />
                                </a>
                                <a href='https://www.linkedin.com/in/sudipto-naskar/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bda%2BDn9UdTryXFEGcpBY6iw%3D%3D'>
                                    <Linkedin color='var(--orange)' size='2.4rem' />
                                </a>
                                <a href='https://github.com/sudipto-naskar'>
                                    <Insta color='var(--orange)' size='2.4rem' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="submit-form">
                        <h4 className="third-text text">Contact Me</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                                <input type="text" className="user" name="user_name" required />
                                <label for="">Name</label>
                            </div>
                            <div className="input-box">
                                <input type="text" className="user" name="user_email" required />
                                <label for="">Email</label>
                            </div>
                            <div className="input-box">
                                <input type="tel" className="user" required />
                                <label for="">Phone</label>
                            </div>
                            <div className="input-box">
                                <textarea name="message" class="user" required cols="30" rows="6"></textarea>
                                <label for="">Messege</label>
                            </div>
                            <input type="submit" className="btn" value="Send" />
                            <span>{ done && <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '1.12rem' }} />} { done && "Thanks for contacting me!"}</span>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact