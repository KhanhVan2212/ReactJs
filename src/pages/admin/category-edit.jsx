import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryById, updateCategory } from '../../api/category';
import { toast } from 'react-toastify';

const CategoryEdit = () => {
    const [categories , setCategories] = useState([]);
    const {register , handleSubmit , reset} = useForm();
    const { id }= useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      (async()=>{
        const data = await getCategoryById(id);
        reset(data);
      })()
    },[id])
    const onHandleUpdate = async (category)=>{
      try {
        const data = await updateCategory(category);
        const newCategory = categories.map((item)=>(item.id === category.id ? category:item ) )
        setCategories(newCategory)
        toast.success("Update thành công");
      } catch (error) {
        toast.error("Lỗi");
      }
    }
    const onSubmit = (data) =>{
      onHandleUpdate(data);
      navigate("/admin/category")

    }
  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update Category</h2>
  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form onSubmit={handleSubmit(onSubmit)} action className="space-y-6" id="add-form">
      <label htmlFor='categoryName' className="block text-sm font-medium text-gray-700">CATEGORY NAME</label>
      <input type="text" {...register('name')}  id="categoryName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ADD</button>
    </form>
  </div>
</div>

  )
}

export default CategoryEdit
