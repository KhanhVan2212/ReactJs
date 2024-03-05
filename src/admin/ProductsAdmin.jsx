import React, { useState } from "react";

const ProductsAdmin = () => {
  return (
    <div>
      <div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
        <a href="/productAll/add">
          <button
            type="button"
            className="mr-3 my-3  text-[16px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none 
    focus:shadow-outline"
          >
            Add New Product
          </button>
        </a>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>#</th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                images
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* {
              products.map((product , index)=>{
                 <tr key={index}>
                  <td></td>
                 </tr>
              })
            } */}




            {/* <tr>
              <th>1</th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                iPhone
              </th>
              <td className="px-6 py-4">
                <img
                  src="https://framerusercontent.com/images/zVVl1L573OVtX5T94Z8eNnXLa0.jpg"
                  alt
                  className="w-28"
                />
              </td>
              <td className="px-6 py-4">200 USD</td>
              <td className="px-6 py-4">12</td>
              <td className="px-6 py-4">
                An apple mobile which is nothing like apple
              </td>
              <td className="pt-16 px-5 flex items-center justify-center">
                <a href="/">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                  focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                </a>
                <button
                  type="button"
                  data-id="${item.id}"
                  className="btn_delete text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
              focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsAdmin;
