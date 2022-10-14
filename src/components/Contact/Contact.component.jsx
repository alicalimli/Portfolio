import './Contact.style.scss'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lg91no7', 'template_jvmvmpc', form.current, 'CecX6cwe1Y7L1F7L0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='contact'>
            <h1 className="sectionTitle">Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Contact