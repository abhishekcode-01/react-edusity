import React, { useRef } from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

   const slider= useRef();
   let tx = 0;

   const slidebackward = () => {
      if(tx < 0){
         tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideforward = () => {
      if(tx > -50){
         tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }
  return (
    <div className='testimonials'>
       <img src={back_icon} className='back-btn' onClick={slidebackward}></img>
       <img src={next_icon} className='next-btn' onClick={slideforward}></img>
       <div className='slider'>
           <ul ref={slider}>
              <li>
                 <div className='slide'>
                    <div className='user-information'>
                       <img src={user_1}></img>
                           <div>
                              <h3>Emily Williams</h3>
                              <span>Edusity,USA</span>
                           </div>
                       <p>
                       Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                       </p>
                    </div>                  
                 </div>
              </li>
              <li>
                 <div className='slide'>
                    <div className='user-information'>
                       <img src={user_2}></img>
                       <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                       </div>
                       <p>
                       Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                       </p>
                    </div>                  
                 </div>
              </li>
              <li>
                 <div className='slide'>
                    <div className='user-information'>
                       <img src={user_3}></img>
                       <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity,USA</span>
                       </div>
                       <p>
                       Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                       </p>
                    </div>                  
                 </div>
              </li>
              <li>
                 <div className='slide'>
                    <div className='user-information'>
                       <img src={user_4}></img>
                       <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                       </div>
                       <p>
                       Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                       </p>
                    </div>                  
                 </div>
              </li>
           </ul>

       </div>

    </div>
  )
}

export default Testimonials