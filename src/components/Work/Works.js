import React from 'react'
import './Works.css'
import Web from '../../access/pic.jpg';
import Web2 from '../../access/image3.avif'
import Web3 from '../../access/image2.jpg';
import Web4 from '../../access/image5.jpg';
import Web5 from '../../access/image6.png';
import Web6 from '../../access/image7.jpg';

const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2> 
       <span className='worksDes'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
       <div className='worksImgs'> 
            <img src={Web} className='worksImg'/>
            <img src={Web2} className='worksImg'/>
            <img src={Web3} className='worksImg'/>
            <img src={Web4} className='worksImg'/>
            <img src={Web5} className='worksImg'/>
            <img src={Web6} className='worksImg'/>
       </div>
       <button className='worksBtn'>See more</button>
    </section>
  )
}

export default Works