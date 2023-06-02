import React from 'react'
import { ReactComponent as ApiLogo } from '../components/assets/api-svgrepo-com.svg'
import { ReactComponent as TailwindCss } from '../components/assets/tailwind-css-icon.svg'
import { ReactComponent as Github } from '../components/assets/github-color-svgrepo-com.svg'
import { ReactComponent as Instagram } from '../components/assets/instagram-1-svgrepo-com.svg'
import { ReactComponent as Linkin} from '../components/assets/linkedin-svgrepo-com.svg'

function Footer() {
  return (
    <>
   
    <div className='bg-black py-5 lg:px-20 px-10 md:px-15 text-white grid grid-cols-2  grid-rows-2 justify-between'>
        <div className='flex flex-wrap w-full h-full items-center row-span-2'>
            <h1 className='text-xl md:text-xl lg:text-3xl font-bold uppercase text-btnColor tracking-wider'>Hesoyam</h1>
        </div>
        <div className='justify-self-end items-center flex flex-wrap justify-center gap-x-4'>
            <h1 className='text-md md:text-lg lg:text-xl font-bold w-full mb-5 text-center'>Follow Me</h1>
             <Github className='w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8 hover:scale-110 transition-all duration-300'/>
             <Instagram className='w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8 hover:scale-110 transition-all duration-300'/>
             <Linkin className='w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8 hover:scale-110 transition-all duration-300'/>
        </div>
        <div className='col-span-2'>
            <h1 className='text-center font-bold text-md md:text-xl mt-5 mb-3'>Built By Hesoyam</h1>
            <div className='flex justify-center gap-x-5 w-full'>
                <ApiLogo className=' w-10 h-10 lg:w-15 lg:h-15 hover:scale-110 transition-all duration-300 bg-black'/>
                <TailwindCss className=' w-10 h-10 lg:w-15 lg:h-15 hover:scale-110 transition-all duration-300 bg-black'/>
                
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Footer