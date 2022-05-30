import React, { memo } from "react";
import SmartphoneLogo1 from "../img/logo2/Smartphone.png";
import SmartphoneLogo2 from "../img/logo2/Smartphone1.png";
import { Link } from "react-router-dom";
import SearchPrd from "./SeachPrd";

const MainMenu = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <div className="navbar-logo rounded ">
            <img src={SmartphoneLogo1} className="logo" />
          </div>
        </Link>
        {/* <a className="nav-link link-light" href="#">
          Khuyến mãi
        </a> */}

        <Link className="nav-link link-light" to="/Cart">
          <i className="bi bi-cart position-relative fs-2">
            <span
              className="position-absolute top-50 start-50 translate-middle badge rounded-pill "
              style={{ fontSize: ".5rem" }}
            >
              1<span className="visually-hidden">unread messages</span>
            </span>
          </i>
        </Link>

        <Link
          className="nav-link link-light d-flex align-items-center"
          to="/Login"
        >
          <i className="bi bi-person position-relative fs-2"></i>{" "}
          <link to="/Login"></link>
          <span> Đăng nhập</span>
        </Link>
        <SearchPrd />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-danger"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " href="#">
                  Hỏi đáp
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  disabled "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Tintuc" className="nav-link  active">
                  {" "}
                  24/7 Công Nghệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default memo(MainMenu);
