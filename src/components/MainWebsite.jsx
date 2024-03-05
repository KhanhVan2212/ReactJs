import React from 'react'
import { Link } from 'react-router-dom'

const MainWebsite = () => {
  return (
    <div>
      <div className="flex items-center mx-[90px] h-[650px]">
  <div className>
    <img src="https://framerusercontent.com/images/zVVl1L573OVtX5T94Z8eNnXLa0.jpg" alt width="400px" className="rounded-3xl" />
  </div>
  <div>
    <h2 className="text-[30px] mx-[70px]">High-quality tech gadgets <br /><div className="ml-[70px]">&amp; accessories</div></h2>
    <div className="flex items-center justify-center">
      <Link to="/products" className="bg-black border mx-[20px] my-[40px] p-[20px] px-[30px] text-[20px] rounded-3xl text-white">Products</Link>
      <a href><button className=" border mx-[20px] my-[40px] p-[20px] px-[30px] text-[20px] rounded-3xl text-black">About Us</button></a>  
    </div>
  </div> 
  <div className>
    <img src="https://framerusercontent.com/images/wbydMCOBfZvOGfjlrnzy3ZdbAA.jpg?scale-down-to=512" alt width="400px" className="rounded-3xl" height="400px" />
  </div>
</div>
    </div>
  )
}

export default MainWebsite
