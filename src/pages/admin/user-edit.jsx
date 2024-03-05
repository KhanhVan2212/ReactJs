import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../../api/user';
import { toast } from 'react-toastify';

const UserEdit = () => {
    const [users , setUsers] = useState([]);
    const { id } = useParams();
    const {register , handleSubmit, reset} = useForm();
    const navigate = useNavigate();
    useEffect(()=>{
    (async()=>{
        const data = await getUserById(id);
        reset(data);
    })()
    },[id])
    const onHandleUpdate = async (user) =>{
        try {
         const data = await updateUser(user);
         toast.success("Update sản phẩm thành công");
         const newUser = users.map((item)=> (item.id === user.id ? user : item));
         setUsers(newUser);
        } catch (error) {
         toast.error("LỖI");
        }
     }
    const onSubmit = (data) =>{
        onHandleUpdate(data);
        navigate("/admin/users");
    }
  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update User</h2>
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={handleSubmit(onSubmit)} action className="space-y-6" id="add-form">
        <label htmlFor='userName' className="block text-sm font-medium text-gray-700">USERNAME</label>
        <input type="text" {...register('username')}  id="userName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
        <label htmlFor='passWord' className="block text-sm font-medium text-gray-700">PASSWORD</label>
        <input type="text" {...register('password')}  id="passWord" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
        <label htmlFor='role' className="block text-sm font-medium text-gray-700">ROLE</label>
        <input type="number" {...register('role')}  id="role" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">UPDATE</button>
      </form>
    </div>
  </div>
  )
}

export default UserEdit
