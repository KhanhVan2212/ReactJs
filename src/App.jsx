import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayuotWebsite from "./components/layuots/LayuotWebsite";
import LayuotAdmin from "./components/layuots/LayuotAdmin";
import ProductPage from "./pages/admin/product";
import { ToastContainer, toast } from 'react-toastify';
import { addProduct, getProducts, removeProductById, updateProduct } from "./api/product";
import ProductAddPage from "./pages/admin/product-add";
import ProductEditPage from "./pages/admin/product-edit";
import MainWebsite from "./components/MainWebsite";
import ProductsWebsite from "./components/ProductsWebsite";
import ProductDetail from "./components/ProductDetail";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UserPage from "./pages/admin/user";
import UserEdit from "./pages/admin/user-edit";
import CategoryPage from "./pages/admin/category";
import CategoryAdd from "./pages/admin/category-add";
import CategoryEdit from "./pages/admin/category-edit";
import ProtectedRoutes from "./admin/ProtectedRoutes";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    })();
  }, []);
 
  const OnHandleRemove = async (id) =>{
    const confirm = window.confirm('Are you sure');
    if(confirm){
      try {
        const data =  await removeProductById(id);
        console.log(data);
          toast.success("Xóa thành công");
          setProducts(products.filter(product => product.id !== id));
        } catch (error) {
          toast.error("LỖI");
        } 
    }
   
  }
  const onHandleAdd = async (product) =>{
     try {
       const data = await addProduct(product);
       toast.success("Thêm sản phẩm thành công");
       setProducts([...products ,data]);
     } catch (error) {
      toast.error("LỖI");
     }
  }
  const onHandleUpdate = async (product) =>{
     try {
      const data = await updateProduct(product);
      toast.success("Update sản phẩm thành công");
      const newProduct = products.map((item)=> (item.id === product.id ? product : item));
      setProducts(newProduct);
     } catch (error) {
      toast.error("LỖI");
     }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={  <LayuotWebsite /> }>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/products" element={<ProductsWebsite products={products} />} />
          <Route path="/products/products/:id" element={<ProductDetail />} />
        
          
        </Route>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/admin" element={<ProtectedRoutes><LayuotAdmin /></ProtectedRoutes>} >
        <Route
          path="/admin/products"
          element={<ProductPage products={products} onRemove={OnHandleRemove}/>}
        />
        <Route
          path="/admin/users"
          element={<UserPage />}
        />
        <Route
          path="/admin/users/:id/edit"
          element={<UserEdit />}
        />
         <Route
          path="/admin/products/add"
          element={<ProductAddPage onAdd={onHandleAdd} />}
        />
          <Route
          path="/admin/products/:id/edit"
          element={<ProductEditPage onUpdate={onHandleUpdate} />}
        />
        <Route
          path="/admin/category"
          element={<CategoryPage />}
        />
         <Route
          path="/admin/category/add"
          element={<CategoryAdd />}
        />
        <Route
          path="/admin/category/:id/edit"
          element={<CategoryEdit />}
        />
        </Route>
       
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
