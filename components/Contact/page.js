'use client'
import React from 'react'
import './Contact.css'
import { SiWalmart } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import Facebook from '@/public/access/contact1.jpg'
import Youtube from '@/public/access/youtube.webp'
import Instagram from '@/public/access/instagram.png'
import Linkedln from '@/public/access/linkedln.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className='clientsImages'>
                <SiWalmart className='clientImage'/>
                <FaMicrosoft className='clientImage Image1'/>
                <SiAdobeillustrator className='clientImage Image2'/>
                <FaSquareFacebook className='clientImage Image3'/>
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
                <button type='submit' className='submitBtn ' value='Send'>Submit</button>
                <div className='links'>
                   <Link href="https://wwww.facebook.com/ekel.godswill" >
                    <Image width={100} height={100} alt="..." className='link' src={Facebook} /> 
                   </Link>
                   <Image width={100} height={100} alt="..." className='link' src={Youtube} />
                   <Image width={100} height={100} alt="..." className='link' src={Instagram} />
                   <Link href="https://www.linkedin.com/in/ekeleolu">
                   <Image width={100} height={100} alt="..." className='link' src={Linkedln} />
                   </Link>
                   
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact