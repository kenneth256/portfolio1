import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    
    <footer className='w-full mt-[100px] pb-10 md:mb-5' id='contact'>
        
      <div className='items-center flex flex-col'>
        <h1 className='heading lg:max-w-[45vw]'>
            Ready  to get started <span className='text-purple'> with digital</span> world?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today  and let's build something amazing together!</p>
        <a href='mailto:kennethdavid256@gmail.com' title='Email Kenneth David'>
            <MagicButton 
            title="Let's get in  touch"
            position='right'
            icon={<FaLocationArrow />}
            />
        </a>
      </div>
      <div className='flex flex-col mt-16 md:flex-row justify-between items-center'>
        <p className='md:font-normal text-sm md:text-base font-light'>Copyright © Kenneth 2024</p>
        <div className='flex gap-3 md:gap-6 items-center'>
            {
                socialMedia.map((profile) => (<div key={profile.id} className='w-10 h-10 backdrop-filter rounded-lg border-black-300 bg-opacity-75 bg-black-200 backdrop-blur-lg saturate-180 cursor-pointer flex justify-center'>
                    <img src={profile.img} alt='profile.img'  height={20}  width={20}/>
                     </div>
                    ))
            }

        </div>
      </div>
    </footer>
  )
}

export default Footer
