import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {

  // const user = localStorage.getItem("user")
  // console.log(JSON.parse(user))
  
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Home
