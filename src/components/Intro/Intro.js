import React from 'react'
import './Intro.css';
import Ekele from '../../access/ekele1.jpg'
import hire from '../../access/hire.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
       <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Ekele</span><br></br>Website Designer </span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br></br>visually appealing and user friendly website</p>
            <Link><button className='btn'><img src={hire} alt='hire' className='hire'/>Hire Me</button></Link>
        </div> 
       <img src={Ekele} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro