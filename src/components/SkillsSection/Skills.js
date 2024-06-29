import React from 'react'
import './skills.css';
import dsa from '../../assets/dsa.jpg';
import front from '../../assets/frontend.png'
import back from '../../assets/backend.jpg'
import java from "../../assets/java.png"
const Skills = () => {
  return (
    <div>
        <section id='skills'> 
          <span className='skilltitle'>What I DO</span>
          <span className='skilldesc'> I am passionate web developer who wants an oppurtunity to work and then learn and improve.
           I have done DSA in Java. And have good knowledge of Backend Development.</span>
            <div className='skillsbar'>
                <div className='skillbar'>
                    <img src={front} alt='webdev' className='skillsbarimg'/>
                        <div className='skillbartext'>
                            <h2>Frontend Development</h2>
                            <p>HTML || CSS || JAVASCRIPT || REACTJS</p>
                        </div>
                </div>
                <div className='skillbar'>
                    <img src={back} alt='webdev' className='skillsbarimg'/>
                        <div className='skillbartext'>
                            <h2>Backend Development</h2>
                            <p>NODEJS || EXPRESS || MONGODB</p>
                        </div>
                </div>
                <div className='skillbar'>
                    <img src={java} alt='webdev' className='skillsbarimg'/>
                        <div className='skillbartext'>
                            <h2>Java</h2>
                            <p>OOPS || CORE JAVA</p>
                        </div>
                </div>
                <div className='skillbar'>
                    <img src={dsa} alt='dsa' className='skillsbarimg'/>
                        <div className='skillbartext'>
                            <h2>Data Structures and Algorithms</h2>
                            <p>DSA</p>
                        </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Skills
