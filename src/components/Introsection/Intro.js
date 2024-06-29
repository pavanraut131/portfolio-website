import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/profilepp.png';

const Intro = () => {
  return (
    <div>
      <section id='introsection'>
        <div className='introcontent'>
        <span className='hello'>Hello,</span><br/>
         <span className='content'>I'am <span className='introname'>Pavan</span><br/>Web Developer</span>
         <p className='content2'>I am a skilled web developer who is seeking for an opportunity<br/> to show case his skills.</p>
         
        </div> 
        <img src={bg} alt='profileimage' className='profile'/>
      </section> 
    </div>
  )
}

export default Intro;
