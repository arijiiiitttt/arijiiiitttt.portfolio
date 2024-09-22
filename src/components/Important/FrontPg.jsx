"use client";
import React from 'react'
import About from "@/components/Base/About";
import FirstPg from "@/components/Base/FirstPg";
import Fooder from "@/components/Base/Fooder";
import Header from "@/components/Base/Header";
import Projects from "@/components/Base/Projects";
import Skills from '../Base/Skills';



const FrontPg = () => {
  return (
   <>
<Header/>
   <FirstPg/>
   <About/>
   <Skills/>  
 
   <Projects/>
  <Fooder/>
   </>
  )
}

export default FrontPg