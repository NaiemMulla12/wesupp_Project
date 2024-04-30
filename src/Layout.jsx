import React from 'react'
import { Outlet } from 'react-router-dom'
import Header  from './Components/Header/Header'
import MyFooter from './Components/Footer/MyFooter'

function Layout() {
  return (

    <>
    <Header/>
    <Outlet/>
    <MyFooter/>

    </>
    
  )
}

export default Layout