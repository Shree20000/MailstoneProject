import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../../Pages/Product/Product";
import AddProduct from "../../Pages/AddProduct/AddProduct";

function RootRouter() {
  return (
    <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/addproduct" element={<AddProduct />} />
      {/* Add more routes as needed */}
      {/* Example: <Route path="another-path" element={<AnotherComponent />} /> */}
    </Routes>
  );
}

export default RootRouter;
