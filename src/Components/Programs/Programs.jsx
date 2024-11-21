import React from 'react'
import './Programs.css'
import Program_1 from '../../assets/program-1.png'
import Program_2 from '../../assets/program-2.png'
import Program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs'>
       <div className='program'>
           <img src={Program_1}></img>
           <div className='caption'>
              <img src={program_icon_1}></img>
                 <p>Graduation Degree</p>
           </div>
           
         
       </div>
       <div className='program'>
           <img src={Program_2}></img>
           <div className='caption'>
              <img src={program_icon_2}></img>
                 <p>Master Degree</p>
           </div>
    
           

       </div>
       <div className='program'>
           <img src={Program_3}></img>
           <div className='caption'>
              <img src={program_icon_3}></img>
                 <p>Post Graduation Degree</p>
           </div>
  
       </div>

    </div>
  )
}

export default Programs