import { Navigate, useRoutes, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Billing from "../pages/Billing";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function Private() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "cart", element: <Cart /> },
        { path: "billing", element: <Billing /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  return <>{routes}</>;
}

export default Private;
