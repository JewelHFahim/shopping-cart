import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Main from "../layout/Main";
import ProductDetail from "../pages/shop/ProductDetail";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
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
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],

  },
]);

export default router;
