import './Contact.style.scss'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { buttonUnstyledClasses } from '@mui/base';

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
        
        e.target.reset()
    };

    const inputChange = (e) => {
        const inputValue = e.target.value;
        const input1 = document.querySelectorAll('input')[1]
        if (inputValue.length > 3) {
            input1.classList.add('perfect')
            input1.classList.remove('bad')
        } else {
            input1.classList.remove('perfect')
            input1.classList.add('bad')
        }
    }

    const inputChange2 = (e) => {
        const inputValue = e.target.value;
        const input2 = document.querySelectorAll('input')[2]
        if (inputValue.includes('@') && inputValue.includes('.com') ) {
            input2.classList.add('perfect')
            input2.classList.remove('bad')
        } else {
            input2.classList.remove('perfect')
            input2.classList.add('bad')
        }
    }

    return (
        <div className='contact' id='contact'>
            <h1 className="sectionTitle">Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='name' onChange={inputChange} required/>
                <input type="email" name='email' placeholder='email' onChange={inputChange2} required />
                <input type="text" name='phoneNO' placeholder='phone number optional*' />
                <textarea name="message" id="" cols="30" rows="10" defaultValue="Hi Ali Reza," required></textarea>
                <Button type='submit' className='submit' variant="contained" endIcon={<SendIcon />} >
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Contact