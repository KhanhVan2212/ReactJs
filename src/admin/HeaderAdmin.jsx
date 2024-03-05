import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <>
     <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20 shadow-md">
        <Link to="/admin" className="text-3xl uppercase text-indigo-500 no-underline">Tech Wave</Link>
      </div>
      <ul className="flex flex-col py-4">
        <li>
         <Link to="/admin/products" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
            Product</Link>
            
        </li>
        <li>
        <Link to="/admin/category" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
            Category</Link>
        </li>
        <li>
        <Link to="/admin/users" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
            Users</Link>
        </li>
        <li>
          <Link to="/"  className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out" /></span>
            <span className="text-sm font-medium">Logout</span>
            </Link>
        </li>
      </ul>
    </div>
    </>

  )
}

export default HeaderAdmin
