import React, { useEffect, useState } from 'react'
import { getCategory, removeCategoryById } from '../../api/category';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
      (async()=>{
        const info = await getCategory();
        console.log(info);
        setCategories(info);
      })();
    }, []);
    
    const OnHandleRemove = async (id) =>{
      const confirm = window.confirm('Are you sure');
      if(confirm){
        try {
          const data =  await removeCategoryById(id);
          console.log(data);    
            toast.success("Xóa thành công");
            setCategories(categories.filter(category => category.id !== id));
          } catch (error) {
            toast.error("LỖI");
          } 
      }
     
    }
    return (
      <>
      <div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
      <Link to="/admin/category/add">
        <button
          type="button"
          className="mr-3 my-3  text-[16px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none 
        focus:shadow-outline"
        >
          Add New Category
        </button>
      </Link>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <td>
            
          </td>
        </tr>
      </thead>
      <tbody className='pt-5 px-5'>
        {categories.map((category , index)=>(
  
    
          <tr key={index} >
          <th>
          {index+1}
          </th>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
          {category.name}
          </th>  
          <td className="pt-5 px-5 flex items-center justify-center">
          <Link
                        to={`/admin/category/${category.id}/edit`}
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                       focus:outline-none focus:shadow-outline"
                      >
                        {" "}
                        Edit{" "}
                      </Link>   
            <button type="button" onClick={() => OnHandleRemove(category.id)} className="btn_delete text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
                  focus:outline-none focus:shadow-outline">Delete</button>
          </td>
        </tr>
            ))}
        </tbody>
    </table>
  </div>
  <ToastContainer />
      </>
    )
}

export default CategoryPage
