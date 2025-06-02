import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Widgets from './components/Widgets'

const RootLayout = () => {
  return (
   <>
      <Navbar />
      <main className=' sm:flex-row  min-h-screen'>
        <div className='container mx-auto px-4 py-8 inline-flex gap-4 display justify-center'>
            <Sidebar />
            <Outlet />
            <Widgets />

        </div>
        

      </main>
   
   </>
  )
}

export default RootLayout