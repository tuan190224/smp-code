import React, { useEffect } from "react";
import { useState, useMemo, useContext, memo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { ManufacturersContext } from "../context/ManufacturersContext";
import { Link, useParams } from "react-router-dom";
import { addPrd } from "../Cart/addPrd";

function Products(prd) {
  const [payNumber, setPayNumber] = useState(0);
  //const [items, setItems] = useState(() => useContext(ProductsContext));
  const [prd_Mft_Id, setPrd_Mft_Id] = useState(0);
  let Id = useParams();
  const items = useContext(ProductsContext);
  const manufacturers = useContext(ManufacturersContext);
  useEffect(() => {
    setPrd_Mft_Id(Id.id);
  }, [Id.id]);
  console.log(manufacturers);
  const pages = Math.ceil(items.length / 5);
  const jsxs = [];
  for (let i = 1; i < pages; i++) {
    jsxs.push(
      <button className="btn btn-primary m-2" onClick={() => setPayNumber(i)}>
        {i}
      </button>
    );
  }

  return (
    <>
      <div
        className="btn-group me-2 gap-2 "
        role="group"
        aria-label="First group"
      >
        {manufacturers.map((mft) => {
          return (
            <button
              type="button"
              className="btn border border-secondary  rounded-pill"
              onClick={() => {
                setPrd_Mft_Id(mft.id);
              }}
            >
              {mft.name}
            </button>
          );
        })}
      </div>
      <div className="prd_body d-flex flex-wrap gap-2">
        {console.log("prd")}
        {items.map((item) => {
          return item.id > payNumber && item.id < payNumber + 5 ? (
            <div
              className={`card p-2 ${
                prd_Mft_Id == ""
                  ? ""
                  : item.manufacturer_id == prd_Mft_Id
                  ? ""
                  : " d-none"
              }`}
              style={{ width: "18rem" }}
              key={item.id}
            >
              <Link to={`/ProductDetails/${item.id}`}>
                <div className=" pt-4 pb-2">
                  <img src={item.img[0]} className="card-img-top" alt="..." />
                </div>
                <h5 className="card-title">{item.name}</h5>
              </Link>
              <div className="card-body">
                {item.price_Sale == "" ? (
                  <p className="card-text">Giá : {item.price} ₫</p>
                ) : (
                  <>
                    <span className=" p-0 card-text text-decoration-line-through">
                      {item.price}
                      {" ₫  "}
                    </span>
                    <span>
                      -
                      {(
                        (Number(item.price.replaceAll(".", "")) /
                          Number(item.price_Sale.replaceAll(".", ""))) *
                          100 -
                        100
                      ).toFixed(0)}
                      %
                    </span>
                    <p className="card-text text-danger fw-bold">
                      Giá chỉ: {item.price_Sale}
                      {" ₫ "}
                    </p>{" "}
                  </>
                )}
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => addPrd(item.id)}
                >
                  Thêm vào giỏ
                </a>
              </div>
            </div>
          ) : undefined;
        })}
      </div>
      <div className="payNumber">{jsxs}</div>
    </>
  );
}

export default memo(Products);
