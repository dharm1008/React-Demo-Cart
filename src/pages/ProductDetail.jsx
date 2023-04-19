import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { products } from "../api";
import { addItem, delItem } from "../features/ProductSlice";

function ProductDetail() {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    products
      .getone(id)
      .then((res) => setProduct(res.data))
      .then(() => setLoading(false));
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem({ ...product, quantity }));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  if (loading) {
    return "loading";
  }
  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img src={product.image} alt={product.title} height="400px" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <p className="lead">{product.description}</p>
          <div className="d-flex justify-content-around align-items-center">
            <h2 className="my-4">${product.price}</h2>
            <div className="d-flex justify-content-around align-items-center">
              <button
                className="me-2 btn btn-outline-primary"
                onClick={() => handleQuantity("inc")}
              >
                +
              </button>
              {quantity}
              <button
                className="ms-2 btn btn-outline-primary"
                onClick={() => handleQuantity("dec")}
              >
                -
              </button>
            </div>
          </div>

          <button
            onClick={() => handleCart(product)}
            className="btn btn-outline-primary my-5"
          >
            {cartBtn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
