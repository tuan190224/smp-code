import React, {
  useState,
  useEffect,
  memo,
  useCallback,
  useContext,
} from "react";
import { Route, Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { addPrd } from "../Cart/addPrd";

function ProductDetails() {
  const [color, setColor] = useState("");

  let prdId = useParams();
  const [prdItem, setPrdItem] = useState();
  const [data, setData] = useState(() => {
    const d = useContext(ProductsContext);
    return d;
  });

  const [hiddenText, setHiddenText] = useState(true);
  const [memory, setMemory] = useState("Bạn chưa chọn ");
  useEffect(() => {
    setPrdItem(
      data.find((i) => {
        return i.id == prdId.id;
      })
    );
  }, [prdId]);
  const setActive = useCallback((e) => {
    // console.log(
    //   e.target.parentElement.querySelectorAll(`.${e.target.classList[1]}`)
    // );
    e.target.parentElement
      .querySelectorAll(`.${e.target.classList[1]}`)
      .forEach((i) => {
        if (i.className.includes("active border-warning text-success"))
          i.classList.remove("active", "border-warning", "text-success");
      });
    e.target.className += " active border-warning text-success";
  });
  return (
    <div className="product-detail  text-start bg-white">
      <div className="prd-dtl-top  p-5">
        <div className="top-bar border-bottom text-start d-flex align-items-center">
          <h1 className="prd-name">{prdItem && prdItem.name}</h1>
          <div className="star ps-5 text-warning">
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <span className="text-dark"> 0 đánh giá</span>
          </div>
        </div>
        <div className="prd-rang  m-2 mb-5"></div>
        <div className="prd-main mt-4 pt-3 d-flex flex-wrap">
          <div className="prd-main-right w-60 ">
            <div
              id="carouselExampleCaptions"
              className="carousel carousel-dark slide w-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators slide-prd-dtl">
                <img
                  src={prdItem && prdItem.img[0]}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className=" active slide--prd"
                  aria-current="true"
                  aria-label="Slide 1"
                ></img>
                <img
                  src={prdItem && prdItem.img[1]}
                  type=""
                  className="  slide--prd"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></img>
                <img
                  src={prdItem && prdItem.img[2]}
                  type=""
                  className="  slide--prd"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></img>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={prdItem && prdItem.img[0]}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={prdItem && prdItem.img[1]}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={prdItem && prdItem.img[2]}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev rounded-circle"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next rounded-circle"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div
              className={`main-right-box1 w-100 mt-5 pt-5 ${
                hiddenText ? "" : "h-auto"
              }`}
            >
              <h5 className="fw-bolder">{prdItem && prdItem.desc[0]}</h5>
              <img src={prdItem && prdItem.img[2]} />
              <p className="">{prdItem && prdItem.desc[1]}</p>
              <h5 className="fw-bolder">{prdItem && prdItem.desc[2]}</h5>
              <img src={prdItem && prdItem.img[3]} />
              <p className="">{prdItem && prdItem.desc[3]}</p>
              <h5 className="fw-bolder">{prdItem && prdItem.desc[4]}</h5>
              <img src={prdItem && prdItem.img[4]} />
              <p className="">{prdItem && prdItem.desc[5]}</p>
              <div
                className={` btl-${
                  hiddenText ? "hidden" : "show"
                }  d-flex align-items-center justify-content-center w-100 `}
              >
                <button
                  type="button"
                  className="btn btn-primary hidden"
                  onClick={() => {
                    hiddenText ? setHiddenText(false) : setHiddenText(true);
                  }}
                >
                  {hiddenText ? "Xem Thêm" : "Ẩn bớt"}
                </button>
              </div>
            </div>
            <div className="main-right-box2 w-100 mt-5 pt-5">
              <div className="right-box2-top border text-start p-2">
                <div className="prd-name">
                  <h5 className="prd-name">{prdItem && prdItem.name}</h5>
                </div>
                <div className="star ps-5 text-warning">
                  <span className="">2.5 </span>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <span className="text-dark"> 0 đánh giá</span>
                </div>
                <div className="m-2 mb-2 border-bottom">
                  <table className=" w-50">
                    <tr className="small ">
                      <td className=" d-flex justify-content-center align-items-center justify-content-evenly">
                        <span>1</span>
                        <i className="bi bi-star"></i>
                      </td>
                      <td className="w-50">
                        <div className="progress progress-h">
                          <div
                            className="progress-bar bg-warning text-dark"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="">25%</td>
                    </tr>
                    <tr className="small ">
                      <td className=" d-flex justify-content-center align-items-center justify-content-evenly">
                        <span>2</span>
                        <i className="bi bi-star"></i>
                      </td>
                      <td className="w-50">
                        <div className="progress progress-h">
                          <div
                            className="progress-bar bg-warning text-dark"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="">25%</td>
                    </tr>
                    <tr className="small ">
                      <td className=" d-flex justify-content-center align-items-center justify-content-evenly">
                        <span>3</span>
                        <i className="bi bi-star"></i>
                      </td>
                      <td className="w-50">
                        <div className="progress progress-h">
                          <div
                            className="progress-bar bg-warning text-dark"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="">25%</td>
                    </tr>
                    <tr className="small ">
                      <td className=" d-flex justify-content-center align-items-center justify-content-evenly">
                        <span>4</span>
                        <i className="bi bi-star"></i>
                      </td>
                      <td className="w-50">
                        <div className="progress progress-h">
                          <div
                            className="progress-bar bg-warning text-dark"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="">25%</td>
                    </tr>
                    <tr className="small ">
                      <td className=" d-flex justify-content-center align-items-center justify-content-evenly">
                        <span>5</span>
                        <i className="bi bi-star"></i>
                      </td>
                      <td className="w-50">
                        <div className="progress progress-h">
                          <div
                            className="progress-bar bg-warning text-dark"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="">25%</td>
                    </tr>
                  </table>
                </div>
                <div className="prd-danh-gia"></div>
              </div>
            </div>
          </div>
          <div className="mw-40 prd-main-left ps-4 text-start d-flex flex-column ">
            <div className="left-box1">
              <div className="left-box-btn">
                <div className=" btl-group group-memory flex-column mb-3">
                  {prdItem &&
                    prdItem.memory.split(",").map((i) => {
                      return (
                        <button
                          type="button"
                          className="btn border border "
                          onClick={(e) => {
                            setActive(e);
                            setMemory(() => e.target.innerText);
                          }}
                        >
                          {i}
                        </button>
                      );
                    })}
                </div>
                <div className=" btl-group flex-column mb-3">
                  {prdItem &&
                    prdItem.color_id.split(",").map((i) => {
                      return (
                        <button
                          type="button"
                          className="btn border"
                          onClick={(e) => {
                            setColor(i);
                            setActive(e);
                          }}
                        >
                          {i}
                        </button>
                      );
                    })}
                </div>
                <div className="left-price">
                  <div className="pr-price">
                    <h4 className="bl-text">Khuyến mãi</h4>
                    {prdItem && prdItem.price_Sale == "" ? (
                      <p className="card-text">Giá : {prdItem.price} ₫</p>
                    ) : (
                      <div className="d-flex">
                        <span className="card-text text-danger fw-bold me-2">
                          Giá chỉ: {prdItem && prdItem.price_Sale}
                          {" ₫ "}
                        </span>{" "}
                        <span className=" p-0 card-text text-decoration-line-through">
                          {prdItem && prdItem.price}
                          {" ₫  "}
                        </span>
                        <span>
                          -
                          {(
                            (Number(
                              prdItem && prdItem.price.replaceAll(".", "")
                            ) /
                              Number(
                                prdItem &&
                                  prdItem.price_Sale.replaceAll(".", "")
                              )) *
                              100 -
                            100
                          ).toFixed(0)}
                          %
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="prd-block">
                    <div className="bl-top">
                      <p> Giá và khuyến mãi dự kiến áp dụng đến 23:59 12/10</p>
                    </div>
                    <div className="bl-body">
                      <div className="bl-body-text">
                        <ul>
                          <li>
                            Hư gì đổi nấy trong 15 ngày nếu lỗi do nhà sản xuất
                            (trừ các nhóm: Đồng hồ, phụ kiện có điện, Phụ kiện
                            xe đạp, Phụ kiện không điện, xe đạp, xe đạp điện)
                          </li>
                          <li>Không áp dụng chung với khuyến mãi khác.</li>
                          <li>Khuyến mãi chưa bao gồm phí giao/chuyển hàng.</li>
                        </ul>
                      </div>
                      <div className="">
                        <button
                          className="btn btn- w-100 bg-danger  text-white"
                          onClick={() => addPrd(prdId.id, memory, color)}
                        >
                          Mua ngay{" "}
                          {prdItem !== undefined
                            ? prdItem.price_Sale ??
                              "với giá" + prdItem.price_Sale
                            : ""}
                          {" ₫"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-box2 border p-3 mt-4">
              <h3>Thông số</h3>
              <ul>
                <li className="">Camera:</li>
                <li className="">Độ phân giải:</li>
                <li className="">Dung lượng pin:</li>
                <li className="">Hệ điều hành:</li>
                <li className="">Chip:</li>
                <li className="">RAM:</li>
                <li className="">
                  Bộ nhớ trong: {memory.includes("T") ? memory : memory + "GB"}
                </li>
              </ul>
            </div>
          </div>
          <div className="prd-main-box2"></div>
        </div>
      </div>
      <div className="prd-dtl-bottom w-100 border p-4">
        <div className="bottom-box1">
          <h4>Có thể bạn cũng quan tâm</h4>
          <div className="box1-card">
            <div className="box1-card-prm">
              <div className="prm--list d-flex justify-content-start">
                {prdItem &&
                  data.map((i) => {
                    if (
                      Number(i.price_Sale.replaceAll(".", "")) <
                      Number(
                        (prdItem.price_Sale || prdItem.price).replaceAll(
                          ".",
                          ""
                        )
                      ) +
                        500000
                    ) {
                      return (
                        <div
                          className="card m-2 p-2"
                          style={{ minWidth: "215px" }}
                          key={i.id}
                        >
                          <Link to={`/ProductDetails/${i.id}`}>
                            <div className=" pt-4 pb-2">
                              <img
                                src={i.img[0]}
                                className="card-img-top"
                                alt="..."
                              />
                            </div>
                            <h5 className="card-title">{i.name}</h5>
                          </Link>
                          <div className="card-body">
                            {i.price_Sale == "" ? (
                              <p className="card-text">Giá : {i.price} ₫</p>
                            ) : (
                              <>
                                <span className=" p-0 card-text text-decoration-line-through">
                                  {i.price}
                                  {" ₫  "}
                                </span>
                                <span>
                                  -
                                  {(
                                    (Number(i.price.replaceAll(".", "")) /
                                      Number(
                                        i.price_Sale.replaceAll(".", "")
                                      )) *
                                      100 -
                                    100
                                  ).toFixed(0)}
                                  %
                                </span>
                                <p className="card-text text-danger fw-bold">
                                  Giá chỉ: {i.price_Sale}
                                  {" ₫ "}
                                </p>{" "}
                              </>
                            )}
                            <a href="#" className="btn btn-primary">
                              Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductDetails);
