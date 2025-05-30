import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Widgets from './components/Widgets'

const RootLayout = () => {
  return (
   <>
      <Navbar />
      <main className=' sm:flex-row  bg-gray-100 min-h-screen'>
        <div className='container mx-auto px-4 py-8'>
            <Sidebar />
            <Outlet />
            <Widgets />



        </div>
        

      </main>


   
   
   
   
   </>
  )
}

export default RootLayout