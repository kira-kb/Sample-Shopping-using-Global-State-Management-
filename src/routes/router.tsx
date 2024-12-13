import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import { PageNotFound } from "../components/pageNotFound";
import ProductDetail from "../pages/productDetail";
import ProductList from "../pages/productList";

const AllRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/product/:id"} element={<ProductDetail />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
