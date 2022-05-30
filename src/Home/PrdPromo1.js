import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { addPrd } from "../Cart/addPrd";
function PrdPromo1(i) {
  const [arr, setArr] = useState([]);
  const [wit, setWit] = useState(4000);
  const [px, setPx] = useState(0);
  const [prmListWith, setPrmListWith] = useState(0);

  useEffect(() => {
    setArr(i.data);
  }, [i.data.length]);

  useEffect(() => {
    setPrmListWith(document.querySelector(".prd-promo-list").clientWidth);
    setWit(() => {
      return (
        232 *
        arr.reduce(function (total, num) {
          return num.manufacturer_id == 1 ? total + 1 : total;
        }, 0)
        // (prmListWith / 5) *
        // arr.reduce(function (total, num) {
        //   return num.manufacturer_id == 1 ? total + 1 : total;
        // }, 0)
      );
    });
  }, [arr]);

  return (
    <>
      {console.log("aaa")}
      <div className="prd-promo mt-4">
        <div className="prd-promo-top">
          <a>
            <img src="https://cdn.tgdd.vn/2022/04/banner/TGDD-Sansale-desk-1200x120-1-1200x120.png" />
            <h3> </h3>
          </a>
        </div>
        <div className="prd-promo-outer">
          <button
            className=" prd-promo-btn carousel-control-prev"
            type="button"
            onClick={() => {
              setPx(() => {
                return px == 0
                  ? -wit + prmListWith
                  : px + prmListWith > 0
                  ? 0
                  : px + prmListWith;
                return px * -1 > wit - prmListWith ? 0 : px - prmListWith;
              });
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="prd-promo-btn-right carousel-control-next"
            type="button"
            onClick={() => {
              setPx(() => {
                return px * -1 > wit - prmListWith ? 0 : px - prmListWith;
              });
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
          <div className="prd-promo-list">
            <div
              className="prd-promo-l "
              style={{
                transform: `translate3d(${px}px , 0px ,0px )`,
                transition: "all 0.5s ease 0s",
                width: `${wit}px`,
              }}
            >
              {arr.map((Product) => {
                if (Product.manufacturer_id == 1) {
                  console.log;
                  return (
                    <div
                      className="card"
                      style={{ width: `224px` }}
                      key={Product.id}
                    >
                      <Link to={`/ProductDetails/${Product.id}`}>
                        <div className=" pt-4 pb-2">
                          <img
                            src={Product.img[0]}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                        <h5 className="card-title">{Product.name}</h5>
                      </Link>
                      <div className="card-body">
                        {Product.price_Sale == "" ? (
                          <p className="card-text">Giá : {Product.price} ₫</p>
                        ) : (
                          <>
                            <span className=" p-0 card-text text-decoration-line-through">
                              {Product.price}
                              {" ₫  "}
                            </span>
                            <span>
                              -
                              {(
                                (Number(Product.price.replaceAll(".", "")) /
                                  Number(
                                    Product.price_Sale.replaceAll(".", "")
                                  )) *
                                  100 -
                                100
                              ).toFixed(0)}
                              %
                            </span>
                            <p className="card-text text-danger fw-bold">
                              Giá chỉ: {Product.price_Sale}
                              {" ₫ "}
                            </p>{" "}
                          </>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function animation(i) {
  //   document.querySelector(i).style.cssText =
  //     "transform: translate3d(-1200px, 0px, 0px);transition: all 0.5s ease 0s;/*! width: 4248px;";
}
export default memo(PrdPromo1);
