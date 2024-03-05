import React from "react";
import { Link } from "react-router-dom";

const ProductsWebsite = ({products}) => {
  return (
    <>
     
    <div class="mx-10 my-10 max-h-full px-20">
      <div class="my-5">
        <h1>Store</h1>
      </div>
      <div>
        <button

          class="categoryAll border rounded-2xl px-4 p-3 mr-3 hover:bg-black hover:text-white"
        >
          ALL
        </button>
      </div>
      <div class="flex grid grid-cols-5 gap-20" key={products.name}>
          {products.map((product , index )=>(
             <Link to={`products/${product.id}`} >
               <div class="my-5" key={index}>
               <div class="0">
                 <img
                   src={product.image}
                   alt=""
                   class="img rounded-2xl h-[250px] w-{250px}"
                 />
               </div>
               <h1 class="my-3 text-black text-xl">{product.name}</h1>
               <span>{product.desc}</span>
               <p class="text-red-500 my-3">{product.price} USD</p>
             </div>
             </Link>
            ))}
      </div>
    </div> 
      {/* <div className="mx-10 my-10 max-h-full px-20">
        <div className="my-5">
          <h1>Store</h1>
        </div>
        <div>
          <button className="categoryAll border rounded-2xl px-4 p-3 mr-3 hover:bg-black hover:text-white">
            ALL
          </button>
        </div>
        <div className="flex grid grid-cols-4 gap-20">
          <div className>
            {products.map((product,index)=>(
                 <div className="my-5" key={index}>
                <div className={0}>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg"
                  alt
                  className="img rounded-2xl h-[250px] w-{250px}"
                />
              </div>
              <Link to={`products/${product.id}`} className="my-3 text-black text-xl">{product.name}</Link>
              <span>{product.desc}</span>
              <p className="text-red-500 my-3">{product.price}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </> */}
    </>
  );
};

export default ProductsWebsite;
