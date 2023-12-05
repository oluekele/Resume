import React from 'react'
import './About.css'
import Ui from '../../access/uidesign.png';
import Web from '../../access/webdesign.jpg';
import { SiSimilarweb } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";

const About = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What i do</span><br></br>
      <span className='skillDiscription'>I am a skilled and passionate web designer with experience in web design, will professional experience of CSS and HTML, intermidiate experience of JavaSript and Beginner experience of React, good know of python programming language as well as design software such as Adobe illustrator. </span>
      <div className='skillsBars'>
        <div className='skillBar'>
        <CgDesignmodo className='web'/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>I am very passionate in designing user friendly interface</p>
          </div>
        </div>
        <div className='skillBar'>
          <SiSimilarweb className='web'/>
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>Passionate in developing productive website</p>
          </div>
        </div>
        <div className='skillBar'>
        <FaAppStore className='web'/>
          <div className='skillBarText'>
            <h2>App</h2>
            <p>Still working in developing my self in App development</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About