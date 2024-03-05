
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const ProductAddPage = ( {onAdd} ) => {
    const {register , handleSubmit , formState:{ errors } , } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        onAdd(data);
        navigate("/admin/products");
    }
  return (
  
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Product</h2>
  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form onSubmit={handleSubmit(onSubmit)} action className="space-y-6" id="add-form">
      <label htmlFor='productName' className="block text-sm font-medium text-gray-700">PRODUCT NAME</label>
      <input type="text" {...register('name' , { required : true })}  id="productName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      {errors.name && errors.name.type === "required" && (
      <div>Không được để trống</div>)}
      <label htmlFor='productImage' className="block text-sm font-medium text-gray-700">IMAGES</label>
      <input type="text" {...register('image', {required: true})}  id="productImage" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      {errors.image && errors.image.type === "required" && (
      <div>Không được để trống</div>)}
      <label htmlFor='productPrice' className="s text-sm font-medium text-gray-700">PRICE</label>
      <input type="number" {...register('price' , { required : true , validate: (value) => !isNaN(value)})}  id="productPrice" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      {errors.price && errors.price.type === "required" && (
      <div>Không được để trống</div>)}
      {errors.price && errors.price.type === "validate" && (
      <div>Phải nhập số</div>)}
      <label htmlFor='productCategory' className="block text-sm font-medium text-gray-700">CATEGORY</label>
      <input type="number" {...register('category')}  id="productCategory" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      <label htmlFor='productDesc' className="block text-sm font-medium text-gray-700">DESCRIPTION</label>
      <input type="text" {...register('desc')}  id="productDesc" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ADD</button>
    </form>
  </div>
</div>

  )
}

export default ProductAddPage
