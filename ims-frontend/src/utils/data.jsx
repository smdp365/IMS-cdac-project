import { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState({});
  return [products, setProducts];
};

export const globalProducts = {};
