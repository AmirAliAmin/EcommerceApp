import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-2 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Hero Right Side */}
        
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </motion.div>
  )
}
