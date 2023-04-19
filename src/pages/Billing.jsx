import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../features/ProductSlice";

function Billing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);

  const cartItems = (cartItem) => (
    <div className="d-flex justify-content-between" key={cartItem.id}>
      <span>{cartItem.title}</span>
      <span className="text-center">{cartItem.quantity}</span>
      <span>{cartItem.price}</span>
      <span className="text-muted">${cartItem.price * cartItem.quantity}</span>
    </div>
  );
  return (
    <div className="conatiner ">
      <div className="text-right">
        <i className="fa fa-close close" data-dismiss="modal"></i>
      </div>

      <div className="px-4 py-5">
        <h5 className="text-uppercase">Jonathan Adler</h5>

        <h4 className="mt-5 theme-color mb-5">Thanks for your order</h4>

        <span className="theme-color">Payment Summary</span>
        <div className="mb-3">
          <hr className="new1" />
        </div>

        <div className="d-flex justify-content-between">
          <span className="fw-bold">Title</span>
          <span className="fw-bold">Quantity</span>
          <span className="fw-bold">Price</span>
          <span className="fw-bold">Total</span>
        </div>

        {state.length !== 0 && state.map(cartItems)}

        <div className="d-flex justify-content-between mt-3">
          <span className="font-weight-bold">Total</span>
          <span className="font-weight-bold theme-color">${total}</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <span className="font-weight-bold">Delivered by</span>
          <span className="font-weight-bold theme-color">05 May</span>
        </div>
        <div className="text-center mt-5">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/");
              dispatch(emptyCart());
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
