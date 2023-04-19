import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../api";

const cardItem = (item) => {
  return (
    <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="lead">${item.price}</p>
        <Link to={`/product/${item.id}`} className="btn btn-outline-primary">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    products
      .getall()
      .then((res) => setData(res.data))
      .then(() => setLoading(false));
  }, []);
  if (loading) {
    return "loading";
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
          <div className="col-12">
            <button
              className="btn btn-outline-primary"
              onClick={() => setModalShow(true)}
            >
              Filters
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{data.map(cardItem)}</div>
      </div>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ].map((item, i) => (
            <div class="form-check" key={i}>
              <input
                name="category"
                class="form-check-input"
                type="radio"
                value={item}
                id={item}
                onChange={(e) => setCat(e.target.value)}
              />
              <label class="form-check-label" htmlFor={item}>
                {item}
              </label>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setModalShow(false);
              setLoading(true);
              products
                .getByCategory(cat)
                .then((res) => setData(res.data))
                .then(() => setLoading(false));
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
