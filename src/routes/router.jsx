import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Main from "../layout/Main";
import ProductDetail from "../pages/shop/ProductDetail";
import Contact from "../pages/contact/Contact";
import UserForm from "../components/form/UserForm";
import OraganicShop from "../pages/oraganic/OraganicShop";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../dashboard/dashboard/Dashboard";
import AddProduct from "../dashboard/add-product/AddProduct";
import Order from "../pages/order/Order";
import About from "../pages/about/About";
import OrdersDB from "../dashboard/dashboard/OrdersDB";
import Invoice from "../dashboard/dashboard/Invoice";

const router = createBrowserRouter([
  // =============>> Client Routes <<============
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/organic-shop",
        element: <OraganicShop />,
      },
      {
        path: "/userform",
        element: <UserForm />,
      },
    ],
  },

  // =============>> Admin Routes <<============
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/orders",
        element: <OrdersDB />,
      },
      {
        path: "/dashboard/invoice/:id",
        element: <Invoice />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
