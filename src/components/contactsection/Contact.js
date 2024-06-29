import React from 'react'
import './contact.css';
import inst from "../../assets/instagram.png"
import git from "../../assets/githubimage.png"
import ld from "../../assets/linkedln.png"

const Contact = () => {
  return (
    <div id='contactpg'>
      <div className='content-cnt'>
        <h1>Contact Me</h1>
        <p className='desc'>Please fill out the below form to contact me.</p>
      </div>
      <div >
        <form className='form'>
            <input type='name'className='name' required placeholder='Your Name' />
            <input type='email' className='email' required placeholder='Your Email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'/>
            <button className='submitbtn' type='submit'>Submit</button>
            <div className='links'>
              <img src={inst} alt='instagram-image' className='link'/>
              <a href='https://github.com/dashboard' target='_blank'><img src={git} alt='github-image' className='link'/></a>
              <a href='https://www.linkedin.com/in/pavan-raut-125bb324a/' target='_blank'><img src={ld} alt='linkedln-image' className='link'/></a>
              
            </div>
        </form>
        <div className="footer-bottom">
        &copy; 2024 MyPortfolio | Designed by Pavan Raut
      </div>
        
      </div>
    </div>
  )
}

export default Contact
