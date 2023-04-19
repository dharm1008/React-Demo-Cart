import axios from "axios";

const BASE = "https://fakestoreapi.com/";
export const products = {
  getall: () => axios.get(BASE + "products"),
  getone: (id) => axios.get(BASE + "products/" + id),
  getByCategory: (category) =>
    axios.get(BASE + "products/category/" + category),
};
