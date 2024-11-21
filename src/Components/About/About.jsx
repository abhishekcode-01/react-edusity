import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = (setplaystate) => {
  return (
    <div className='about'>
        <div> 
           <div className='about-left'>
                <img src={about} className='about-img'></img>
                <img src={play_icon} className='play-icon' onClick={()=>{
                  setplaystate(true)
                }}></img>
            </div>
        </div>
        <div className='about-right'>
            <h3>about university</h3>
            <h2>nurturing tomorrow's <br/>leaders today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p><br/>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p><br/>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About