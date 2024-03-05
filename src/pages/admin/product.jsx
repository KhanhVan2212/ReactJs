import React from "react";
import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
  return (
    <div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
      <Link to="/admin/products/add">
        <button
          type="button"
          className="mr-3 my-3  text-[16px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none 
        focus:shadow-outline"
        >
          Add New Product
        </button>
      </Link>
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
          {products.map((product, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <img
                    src={product.image}
                      className="w-28"
                    />
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.desc}</td>
                  <td className="pt-16 px-5 flex items-center justify-center">
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                     focus:outline-none focus:shadow-outline"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <button
                      type="button"
                      className="btn_delete text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
                 focus:outline-none focus:shadow-outline"
                      onClick={() => onRemove(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
