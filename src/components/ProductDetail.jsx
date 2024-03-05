import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/product';

const ProductDetail = () => {
    const [product , setProduct] =useState({});
    const { id } = useParams();
    useEffect(()=>{
        (async()=>{
            const data = await getProductById(id);
            console.log(data);
            setProduct(data);
        })();
        },[id]);
  return (
   <  div>
  <div className="mx-4 p-20">
    <h5 className="my-5 ml-20">Store /</h5>
      <div className="product-detail flex justify-center  gap-10 my-5 mx-20">
      <div>
        <img   src={product.image + "?" + product.id} alt className=" img rounded-3xl w-[400px]" />
      </div>
      <div>
        <h1 className="mb-9 text-[40px]">{product?.name}</h1>
        <span className="my-9 text-[20px]">{product?.desc}</span>
        <p className="my-9 text-[24px] text-red-500">{product?.price} USD</p>
        <div className=" ">
          <button className="bg-black hover:bg-black text-white text-[24px] font-bold py-3 px-4 border-b-4 rounded-3xl w-full">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
 
</div>

  )
}

export default ProductDetail
