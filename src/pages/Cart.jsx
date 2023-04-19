import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { delItem } from "../features/ProductSlice";

const Cart = () => {
  const state = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-6">
              <h3>{cartItem.title}</h3>
              <div class="d-flex align-items-center justify-content-between mt-1 w-100">
                <h6 class="font-weight-bold my-2">${cartItem.price}</h6>
                <h6 class="font-weight-bold my-2 float-right">
                  {cartItem.quantity}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-primary mb-5 w-25 "
            onClick={() => navigate("/billing")}
          >
            Proceed To checkout
          </button>
          <div className="h1">TOTAL : {total}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
