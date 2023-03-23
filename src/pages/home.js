import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';





const home = () => {

  return (
    <div>
      <Navbar/>
      <div className="wrap">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default home
