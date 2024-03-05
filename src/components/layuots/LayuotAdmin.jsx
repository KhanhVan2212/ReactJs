import React from 'react'
import HeaderAdmin from '../../admin/HeaderAdmin'
import { Outlet } from 'react-router-dom'

const LayuotAdmin = () => {
  return (
   <>
   <div>
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
  <div className="min-h-screen flex flex-row bg-gray-100">
    <HeaderAdmin />
    
    <Outlet />
    
  </div>
</div>

   </>
  )
}

export default LayuotAdmin
