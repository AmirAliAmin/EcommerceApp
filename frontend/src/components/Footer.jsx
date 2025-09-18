import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_2fr] gap-14 my-10 mt-15 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nostrum tempore itaque maiores quaerat, fugit odit, doloribus at quam est praesentium ex enim eius atque? Aut dolorum harum assumenda ea.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+92-3261971792</li>
                <li>aliaminamir@gmail.com</li>
               
            </ul>
        </div>
    </div>
    <div>
        <hr className='' />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
    </div>
    </div>
  )
}
