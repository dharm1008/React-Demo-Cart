import PublicRoutes from "./routes/Public";
import PrivateRoutes from "./routes/Private";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  let isLoggedIn = useSelector((state) => state.auth.authenticate);
  const routes = useRoutes([
    { path: "/*", element: isLoggedIn ? <PrivateRoutes /> : <PublicRoutes /> },
  ]);

  return <div className="app">{routes}</div>;
}

export default App;
