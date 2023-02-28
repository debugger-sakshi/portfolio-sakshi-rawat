import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header, { HeaderPhone } from './components/Header';
// import HeaderPhone from './components/Header/HeaderPhone'
import Home from './components/Home';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import TimeLine from './components/TimeLine';
import Work from './components/Work'

const App = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth/window.innerHeight)
  // console.log(menuOpen)
  useEffect(() =>{
    const resizeRatio = () =>{
      setRatio(window.innerWidth/window.innerHeight)
    }
    window.addEventListener("resize",resizeRatio)
    return () =>{
      window.removeEventListener("resize",resizeRatio)
    }
  },[ratio]);
  console.log(ratio)
  if(ratio > 2) return <em>Please change the ratio to view</em>
  return (
    <>
     <HeaderPhone setMenuOpen={setMenuOpen} menuOpen={menuOpen}  /> 
     {/* <HeaderPhone /> */}
     <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
     <Home ratio={ratio} />
     <Work />
     <TimeLine />
     <Services />
     <Testimonial />
     <Contact />
     <Toaster />
     <Footer />
    </>
  )
}
export  default App;