import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (user) => {
    try {
      const { data } = await axios.post("http://localhost:3000/signup", user);
      console.log(data);
      toast.success("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      toast.error("Tài khoản đã tồn tại");
    }
  };
  return (
    <>
      <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register to your account
        </h2>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            id="signUp"
          >
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {errors.email && errors.email.type === "required" && (
              <div>Không được để trống</div>
            )}
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {errors.password && errors.password.type === "required" && (
              <div>Không được để trống</div>
            )}
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
