import React, { useState, useEffect, memo } from "react";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div className="HomePrd">
      <ProductList />
    </div>
  );
};
export default memo(Body);
