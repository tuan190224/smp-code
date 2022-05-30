import React, { useEffect, useState, useContext, memo } from "react";
import { ManufacturersContext } from "../context/ManufacturersContext";
import { Link } from "react-router-dom";

const SelectMenu = () => {
  const [category, setCategory] = useState([]);

  const manufacturers = useContext(ManufacturersContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ULR_2 + "category")
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, []);

  return (
    <div className=" w-100 d-flex d-flex justify-content-evenly bg-white">
      {console.log("selectMN")}
      {category.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <button
              type="button"
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className={"bi bi-" + item.name}></i>
              <span className="ms-2">{item.name}</span>
            </button>
            <ul className="dropdown-menu">
              {manufacturers.map((item) => {
                return (
                  <li key={item.id}>
                    <Link className="dropdown-item" to={`/Products/${item.id}`}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default memo(SelectMenu);
