import React, { useEffect, useState, useContext, memo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import PrdPromo1 from "./PrdPromo1";
import PrdPromo2 from "./PrdPromo2";
import PrdPromo3 from "./PrdPromo3";
function ProductList(i) {
  const items = useContext(ProductsContext);

  return (
    <React.StrictMode>
      <PrdPromo1 data={items} />
      <PrdPromo2 data={items} />
      <PrdPromo3 data={items} />
    </React.StrictMode>
  );
}

export default memo(ProductList);
