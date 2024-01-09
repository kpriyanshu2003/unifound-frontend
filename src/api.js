import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:3300/` });

// fetch by category
// export const fetchItems = (category) => API.get(`/items/?category=${category}`);
export const fetchItems = (category) =>
  API.get(
    `https://finding-nemo.onrender.com/lostItem/getByCategory?category=${category}`
  );

// fetch by id
export const fetchItem = (id) => API.get(`/items/${id}`);

// add new item
// export const createItem = (newItem) => API.post("/items/add", newItem);
export const createItem = (newItem) =>
  API.post("https://finding-nemo.onrender.com/lostItem/addLostItem", newItem);

// remove item
export const removeItem = (id) => API.delete(`/items/${id}`);
