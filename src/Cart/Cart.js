import React, {
  useState,
  useEffect,
  memo,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { ProductsContext } from "../context";
import addressApi from "../Api/addressApi";
import { removeVietnameseTones } from "../handlers/removeVietnameseTones";
import { addCard, loanCard, cartList } from "../LocalStorage/";
import { Link } from "react-router-dom";
function Cart() {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState([]);
  const [code, setCode] = useState([]);
  const [districtsArray, setDistrictsArray] = useState([]);
  const [wards, serWards] = useState([]);
  const [ward, serWard] = useState([]);
  const [d_none, setD_none] = useState(true);
  const [value, setValue] = useState("");
  const [localStorageCart, setLocalStorageCart] = useState(cartList);
  const prdList = useContext(ProductsContext);
  const [list, setList] = useState();

  const [somePrice, setSomePrice] = useState("");

  const cartLists = useMemo(() => {
    let i;
    if (localStorageCart !== undefined && prdList !== undefined) {
      return localStorageCart.map((cartItem) => {
        i = prdList.find((prdItem) => {
          return cartItem.id == prdItem.id;
        });

        if (i !== undefined)
          return {
            name: i.name,
            img: i.img[0],
            price: i.price,
            color_id: [i.img, cartItem.color],
            price_Sale: i.price_Sale,
            memory: [i.memory, cartItem.memory],
            id: i.id,
            quantity: cartItem.quantity,
          };
      });
    }
  }, [prdList]);

  const somePrdPrice = useCallback((data) => {
    return data.reduce((total, value) => {
      console.log(total);
      return value.price_Sale == ""
        ? +value.price.replaceAll(".", "") * value.quantity + total
        : +value.price_Sale.replaceAll(".", "") * value.quantity + total;
    }, 0);
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await addressApi.getAll();
        setData(response);
      } catch (err) {
        console.error("failed to address");
      }
    };
    fetchAddress();
  }, []);

  useEffect(() => {
    value !== "" ? setD_none(false) : setD_none(true);

    setCode(() => {
      return address.filter((item) => {
        if (value !== "") {
          if (removeVietnameseTones(item.name.toLowerCase()).includes(value))
            return item.name;
        } else {
          return item.name;
        }
      });
    });
  }, [value]);

  const addClass = useCallback((element) => {
    element.className.search("d-none") < 0
      ? element.classList.add("d-none")
      : null;
  });
  const removeClass = useCallback((element) => {
    element.target.nextElementSibling.className.search("d-none") > -1
      ? element.target.nextElementSibling.classList.remove("d-none")
      : element.target.nextElementSibling.classList.add("d-none");
  });

  const searchValues = useCallback((value, array, setArray) => {
    setArray(() => {
      return array.filter((item) => {
        if (value !== "") {
          if (removeVietnameseTones(item.name.toLowerCase()).includes(value))
            return item.name;
        } else {
          return item.name;
        }
      });
    });
  });

  return (
    <div className=" w-100 cart d-flex justify-content-center ">
      <div className="  p-2 cart-body m-2 bg-white rounded-3">
        <div className="mb-2 cart-prdList">
          {
            // console.log(cartLists)
            cartLists.map((i) => {
              return i !== undefined ? (
                <>
                  <div key={i.id}>
                    <div
                      className="card mb-1 pt-2 pb-2"
                      style={{ width: "100%" }}
                    >
                      <div className=" d-flex flex-wrap  align-self-stretch text-start g-0 img--">
                        <Link
                          className="text-dark"
                          to={`/ProductDetails/${i.id}`}
                          onClick={() => setD_none(true)}
                        >
                          <div className="text-center ">
                            <img
                              src={i.img}
                              className="rounded-start "
                              alt="..."
                              style={{ maxWidth: "" }}
                            />
                          </div>
                        </Link>
                        <div className="col-md-6 text">
                          <div className="card-body p-2">
                            <h5 className="card-title text-break">{i.name}</h5>
                            {i.price_Sale == "" ? (
                              <p className="card-text">Giá : {i.price} </p>
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
                          </div>
                        </div>
                        <div className="input">
                          <div></div>
                          <input
                            className=" w-100 form-control"
                            placeholder={i.quantity}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null;
            })
          }
        </div>
        <div className=" cart-check-out">
          <h4 className="text">Thông tin khách hàng</h4>
          <input type="radio" name="check" value="Anh" />
          <span> Anh </span>
          <input type="radio" name="check" value="Chi" />
          <span> Chị</span>
          <div className="mb-2 check-out-input d-flex flex-wrap">
            <input
              type="text"
              className="name m-2 form-control"
              placeholder="Họ và Tên"
            ></input>
            <input
              type="text"
              className="phone-number m-2 form-control"
              placeholder="Số điện thoại"
            ></input>
          </div>
          <div className=" mb-3 d-flex flex-wrap check-out-input input2">
            <div className="input-item">
              <input
                type="text"
                className="m-2 form-control form-control"
                placeholder="Nhập tỉnh"
                onMouseMove={(e) => {
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    data,
                    setAddress
                  );
                }}
                onChange={(e) =>
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    data,
                    setAddress
                  )
                }
                onClick={(e) => removeClass(e)}
              ></input>
              <select
                className="form-select d-none"
                size="5"
                aria-label="size 3 select example"
              >
                {console.log("cart")}

                {address.map((i) => {
                  return (
                    <option
                      key={i.code}
                      value={i.code}
                      onClick={(e) => {
                        setCode(i.districts);
                        e.target.parentNode.parentNode.firstChild.value =
                          e.target.innerText;
                        addClass(e.target.parentNode);
                      }}
                    >
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-item">
              <input
                type="text"
                className="m-2 form-control "
                placeholder="Nhập quận "
                onChange={(e) =>
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    code,
                    setDistrictsArray
                  )
                }
                onMouseMove={(e) =>
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    code,
                    setDistrictsArray
                  )
                }
                onClick={(e) => removeClass(e)}
              ></input>
              <select
                className="form-select d-none"
                size="5"
                aria-label="size 3 select example"
              >
                {districtsArray.map((i) => {
                  return (
                    <option
                      value={i.code}
                      onClick={(e) => {
                        serWards(i.wards);
                        {
                          e.target.parentNode.parentNode.firstChild.value =
                            e.target.innerText;
                        }
                        addClass(e.target.parentNode);
                      }}
                    >
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-item">
              <input
                type="text"
                className="m-2 form-control "
                placeholder="Nhập phường xã"
                onChange={(e) =>
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    wards,
                    serWard
                  )
                }
                onMouseMove={(e) =>
                  searchValues(
                    removeVietnameseTones(e.target.value.toLowerCase()),
                    wards,
                    serWard
                  )
                }
                onClick={(e) => removeClass(e)}
              ></input>
              <select
                className="form-select d-none"
                size="5"
                aria-label="size 3 select example"
              >
                {ward.map((i) => {
                  return (
                    <option
                      value={i.code}
                      onClick={(e) => {
                        {
                          e.target.parentNode.parentNode.firstChild.value =
                            e.target.innerText;
                        }
                        addClass(e.target.parentNode);
                      }}
                    >
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <input
                type="text"
                className="m-2 form-control "
                placeholder="Nhập số nhà, tên đường..."
              ></input>
            </div>
          </div>
        </div>
        <div className="cart-prm"></div>
        <div className="cart-btn">
          <p className="">
            Tổng tiền:{" "}
            <span className="text-danger">
              {cartLists[0] !== undefined
                ? somePrdPrice(cartLists).toLocaleString("de-DE") + "VND"
                : null}
            </span>
          </p>
          <button type="button" className="btn btn-danger w-100">
            <h4 className="text-white">ĐẶT HÀNG</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(Cart);
