import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/AuthSlice";

const CartBtn = () => {
  const count = useSelector((state) => state.products.quantity);

  return (
    <Link to="/cart" className="btn btn-outline-primary ms-2">
      <span className="fa fa-shopping-cart me-1"></span> Cart ({count})
    </Link>
  );
};

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid py-2">
        <Navbar.Brand as="div" onClick={() => navigate("/")}>
          DEMO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <CartBtn />
          <button
            className="btn btn-outline-primary ms-2"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
