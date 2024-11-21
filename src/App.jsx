import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {
  const[playstate, setplaystate] = useState(false)
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>      
      <div className='container'>
      <Title subtitle='our program' title='what we offer'></Title>
      <Programs></Programs>
      <About setplaystate={setplaystate}></About>
      <Title subtitle='gallery' title='campus photos'></Title>
      <Campus></Campus>
      <Title subtitle='testimonials' title='what student says'></Title>
      <Testimonials></Testimonials>
      <Title subtitle='contact us' title='get in touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <Videoplayer playstate={setplaystate} setplaystate={setplaystate}></Videoplayer>  
    </div>
  )
}

export default App