import { useState, useEffect, memo, useCallback, useMemo, useRef } from "react";

import addressApi from "../Api/addressApi";
import { removeVietnameseTones } from "../handlers/removeVietnameseTones";
import { Link } from "react-router-dom";
import { loginApi } from "../Api";

function Signin() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [ckPass2, seCkPass2] = useState(pass === pass2);
  const [isMail, setIsMail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [btnClick, setBtnClick] = useState(false);

  const [sex, setSex] = useState("");
  const [fullName, setFullName] = useState("");

  //////////////

  const [data, setData] = useState([]);
  const [address, setAddress] = useState([]);
  const [code, setCode] = useState([]);
  const [districtsArray, setDistrictsArray] = useState([]);
  const [wards, serWards] = useState([]);
  const [ward, serWard] = useState([]);
  const [d_none, setD_none] = useState(true);
  const [value, setValue] = useState("");

  ////////////////
  const btn = useRef();
  const checkMail = useCallback((value) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(mailFormat)) {
      setIsMail(true);
      setMail(value);
    } else {
      setIsMail(false);
    }
  });
  useEffect(() => {
    //const btn = document.querySelector(".login-btn");

    if (mail !== "" && pass !== "" && pass2 !== "") {
      if (isPassword && isMail && ckPass2) {
        btn.current.removeAttribute("disabled");
      } else {
        btn.current.getAttribute("disabled") ??
          btn.current.setAttribute("disabled", "");
      }
    }
  }, [isPassword, isMail]);
  const checkPass = useCallback((value) => {
    const passw = /^[A-Za-z]\w{7,14}$/;
    if (value.match(passw)) {
      setIsPassword(true);
      setPass(value);
    } else {
      setIsPassword(false);
    }
  }, []);

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

  // ////////////
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

  ///////////////

  ////Post///////////

  const postNew = useCallback(async () => {
    const data = {
      fullName: fullName,
      sex: sex,
      email: mail,
      other: {},
      pass: pass,
    };

    try {
      await loginApi.post(data);
      console.log(data);
    } catch (e) {
      console.log("failed to postuser", e);
    }
  });

  //////////////////
  return (
    <div className="form d-flex justify-content-center">
      <div className="p-2 pt-5 m-2 form-login  bg-white rounded-3 ">
        <div className="mb-4 login- ">
          <h4 className="login-">Đăng ký</h4>
          <p className="text-center">Chào mừng đến với SmartPhone</p>
        </div>
        <div className="login- d-flex flex-column  justify-content-start">
          <div className=" cart-check-out">
            <input
              type="radio"
              name="check"
              value="Anh"
              onClick={(e) => {
                e.target.checked && setSex("male");
              }}
            />
            <span> Anh </span>
            <input
              type="radio"
              name="check"
              value="Chi"
              onClick={(e) => {
                e.target.checked && setSex("female");
              }}
            />
            <span> Chị</span>
            <div className="mb-2  check-out-input d-flex flex-wrap input2 ">
              <div className="input-item  ">
                <input
                  type="text"
                  className={`login-mail  m-2 form-control ${
                    !isMail && "border border-danger error"
                  }`}
                  name="mail"
                  placeholder="Nhập mail"
                  onChange={(e) => {
                    checkMail(e.target.value);
                  }}
                ></input>
                <label for="inputValue" className="ps-3 text-start mb-3">
                  <small className=" text-danger">
                    {!isMail && "nhập mail hợp lệ"}
                  </small>
                </label>
              </div>

              <div className="input-item">
                <input
                  type="text"
                  className="name  m-2 form-control"
                  placeholder="Họ và Tên"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className=" check-out-input d-flex flex-wrap input2 ">
              <div className=" input-item ms-2 me-0 text-start">
                <div className="border border-1 rounded d-flex">
                  <input
                    type={btnClick ? "text" : "password"}
                    className="login-pass   form-control border-0 pe-0 "
                    name="pass"
                    placeholder="nhập mật khẩu"
                    onChange={(e) => {
                      checkPass(e.target.value);
                    }}
                  ></input>
                  <button
                    class=" border border-0 bg-white rounded-end text-muted"
                    type="button"
                    id=""
                    onClick={() => setBtnClick(!btnClick)}
                  >
                    <i
                      className={`bi bi-${
                        btnClick ? "eye-fill" : "eye-slash-fill"
                      }`}
                    ></i>{" "}
                  </button>{" "}
                </div>
                <label for="" className="ps-3 text-start ">
                  <small
                    className={`text-danger text-wrap ${
                      isPassword && " d-none"
                    }`}
                  >
                    Mật khẩu 8-15 ký tự (a-z) không chứa ký tự đặc biệt
                  </small>
                </label>
              </div>
              <div className="input-item ms-2 text-start">
                <div className="border  border-1 rounded d-flex">
                  <input
                    value={pass2}
                    type={btnClick ? "text" : "password"}
                    className="login-pass form-control border-0 pe-0"
                    name="pass"
                    placeholder="nhập lại mật khẩu"
                    onChange={(e) => {
                      setPass2(e.target.value);
                      seCkPass2(e.target.value === pass);
                    }}
                  ></input>
                  <button
                    class=" border border-0 bg-white rounded-end text-muted"
                    type="button"
                    id=""
                    onClick={() => setBtnClick(!btnClick)}
                  >
                    <i
                      className={`bi bi-${
                        btnClick ? "eye-fill" : "eye-slash-fill"
                      }`}
                    ></i>{" "}
                  </button>{" "}
                </div>
                <label for="" className="ps-3 text-start ">
                  <small
                    className={`text-danger text-wrap ${ckPass2 && " d-none"}`}
                  >
                    Mật khẩu nhập lại không đúng
                  </small>
                </label>{" "}
              </div>
            </div>

            <div className=" mb-3 d-flex flex-wrap check out-input input2">
              <div className="input-item ">
                <input
                  type="text"
                  className="m-2 form-control"
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
              <div className="input-item ">
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
              <div className="input-item ">
                <input
                  type="text"
                  className="m-2 form-control"
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
              <div className=" ">
                <input
                  type="text"
                  className="m-2 form-control"
                  placeholder="Nhập số nhà, tên đường..."
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="login-">
          <button
            ref={btn}
            disabled
            type=""
            className={` w-50 login-btn btn btn-danger `}
            onClick={() => alert(112)}
          >
            {" "}
            Đăng Ký
          </button>
        </div>
        <div className="login-">
          <small className="">
            Bạn đã có tài khoản?{" "}
            <Link to="/login">
              {" "}
              <span className="text-danger"> Đăng nhập</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
export { Signin };
