import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
