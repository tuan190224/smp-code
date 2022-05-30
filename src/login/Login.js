import { useState, useEffect, memo, useCallback, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isMail, setIsMail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [btnClick, setBtnClick] = useState(false);
  const btn = useRef();
  const checkMail = useCallback((value) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(mailFormat)) {
      setIsMail(true);
    } else {
      setIsMail(false);
    }
  });
  useEffect(() => {
    //const btn = document.querySelector(".login-btn");

    if (mail !== "" && pass !== "") {
      if (isPassword && isMail) {
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
    } else {
      setIsPassword(false);
    }
  }, []);
  return (
    <div className="form d-flex justify-content-center">
      <div className="p-2 pt-5 m-2 form-login  bg-white rounded-3 ">
        <div className="mb-4 login- ">
          <h4 className="login-">Đăng nhập</h4>
          <p className="text-center">Chào mừng bạn trở lại</p>
        </div>
        <div className="login- d-flex flex-column  justify-content-start">
          <div className="input-group  login- ">
            <input
              value={mail}
              type="text"
              className={`login-mail form-control ${
                !isMail && "border border-danger error"
              }`}
              name="mail"
              placeholder="Nhập mail/Số điện thoại"
              onChange={(e) => {
                setMail(e.target.value);
                checkMail(e.target.value);
              }}
            ></input>
          </div>
          <label for="inputValue" className="ps-3 text-start mb-3">
            <small className=" text-danger">
              {!isMail && "nhập mail/Số điện thoại hợp lệ"}
            </small>
          </label>
          <div className="input-group login-">
            <input
              value={pass}
              type={btnClick ? "text" : "password"}
              className="login-pass form-control border-end-0"
              name="pass"
              placeholder="nhập mật khẩu"
              onChange={(e) => {
                setPass(e.target.value);
                checkPass(e.target.value);
              }}
            ></input>
            <button
              class=" border border-1 bg-white rounded-end text-muted"
              type="button"
              id=""
              onClick={() => setBtnClick(!btnClick)}
            >
              <i
                className={`bi bi-${btnClick ? "eye-fill" : "eye-slash-fill"}`}
              ></i>{" "}
            </button>{" "}
          </div>
          <label for="" className="ps-3 text-start mb-3">
            <small className={`text-danger ${isPassword && " d-none"}`}>
              Mật khẩu 8-15 ký tự (a-z)
              <br /> không chứa ký tự đặc biệt
            </small>
          </label>
        </div>
        <div className="login-">
          <button
            ref={btn}
            disabled
            type="submit"
            className={` w-100 login-btn btn btn-danger  ${btnClick ? "" : ""}`}
          >
            {" "}
            Đăng Nhập
          </button>
        </div>
        <div className="login-">
          <small className="">
            Bạn chưa có tài khoản?{" "}
            <Link to="/Signin">
              <span className="text-danger"> Đăng ký</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
export { Login };
