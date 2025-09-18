import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

export default function SearchBar() {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)

    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes("collection")) {
            setVisible(true)
        }else{
            setVisible(false)
        }
        // console.log(location.pathname)
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Here.......' className='flex-1 outline-none bg-inherit text-sm' />
            <img src={assets.search_icon} className='w-4' alt="" />
        </div>
        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ): null
}
