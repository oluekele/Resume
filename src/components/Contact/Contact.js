import React from 'react'
import './Contact.css'
import { SiWalmart } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import Facebook from '../../access/contact1.jpg'
import Youtube from '../../access/youtube.webp'
import Instagram from '../../access/instagram.png'
import Linkedln from '../../access/linkedln.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z8pgi4n', 'template_wunqe9t', form.current, '5-LdgElK_DoUGYRWThRLN')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent successfully')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientsDesc'>
               I have had the opportunity to work a diverse group of people, some of a notable companies, which gave me some significant knowlege of work control and time management 
            </p>
            <div className='clientsImgs'>
                <SiWalmart className='clientImg'/>
                <FaMicrosoft className='clientImg img1'/>
                <SiAdobeillustrator className='clientImg img2'/>
                <FaSquareFacebook className='clientImg img3'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>
                Please fill out the form below to discuss any work opportunities
            </span>
            <form className='contactForm' ref={form}  onSubmit={sendEmail}>
                <input  type='text' className='name' placeholder='Your name' name='your_name'/>
                <input  type='email' className='email' placeholder='Your email' name='your_email'/>
                <textarea name='message' cols='30' rows='5' placeholder='Your message' className='msg'></textarea>
                <button type='submit' className='submitBtn' value='Send'>Submit</button>
                <div className='links'>
                   <img className='link' src={Facebook} /> 
                   <img className='link' src={Youtube} />
                   <img className='link li' src={Instagram} />
                   <img className='link' src={Linkedln} />
                   
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact