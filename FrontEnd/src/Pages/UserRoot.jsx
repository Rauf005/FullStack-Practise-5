import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Outlet} from "react-router-dom"

function UserRoot() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default UserRoot