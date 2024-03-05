import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWebsite = () => {
  return (
    <div>
          <nav>
  <div className="items-center inline">
    <div className="flex justify-between h-16 px-10 shadow items-center">
      <div className="flex items-center space-x-8">
       <Link to="/">
       <a className="no-underline text-black"><h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Tech Wave</h1></a>
       </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="hidden md:flex justify-around space-x-5 mr-[40px]">
          <Link to="/products" className="hover:text-indigo-700 text-gray-700 no-underline text-[18px]">Products</Link>
          <a href="#" className="hover:text-indigo-600 text-gray-700 no-underline text-[18px]">About</a>
          <a href="#" className="hover:text-indigo-600 text-gray-700 no-underline text-[18px]">Support</a>
          <a href="#" className="hover:text-indigo-600 text-gray-700 no-underline text-[18px]">Contact</a>
        </div>
        <div className="flex gap-4">
          <div>
            <Link to="/admin"  className="signup bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm no-underline">ADMIN</Link>
          </div>  
          <div>
          <Link to="/login"  className="signup bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm no-underline">LOGIN</Link>
          </div>
          <div>
          <Link to="/register"  className="signup bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm no-underline">REGISTER</Link>
          </div>
          <div>
          <Link to="/"  className="signup bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm no-underline">LOGUOT</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HeaderWebsite
