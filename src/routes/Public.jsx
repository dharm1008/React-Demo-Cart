import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";

function Public() {
  let routes = useRoutes([{ path: "/", element: <Login /> }]);

  return <>{routes}</>;
}

export default Public;
