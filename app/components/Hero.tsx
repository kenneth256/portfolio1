import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa";



const Hero = () => {
  return (
    <div className='pt-20 px-36 '>
        <div>
        <Spotlight className='md:-top-32 md:-left-20 -top-40 -left-10  h-screen' fill='white'/>
        <Spotlight className='top-10 left-full  h-[80vh]' fill='purple'/>
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className='relative flex justify-center my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:maz-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Kenny's Portfolio Done with Next.Js</h2>
        <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming  concepts into seamless experience '/>
        <p className='text-center mb-4'>Hi I&apos;m Kenneth A frontend developer from Uganda</p>
    <a href="#about" title='show my work'>
        <MagicButton title="Show my work"  icon={<FaLocationArrow />} position='right' />
    </a>
        </div>
       
    </div>

    </div>
  )
}

export default Hero
