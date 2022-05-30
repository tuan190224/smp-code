import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
  memo,
} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { removeVietnameseTones } from "../handlers/removeVietnameseTones";

function SearchPrd() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const prdList = useContext(ProductsContext);
  const [d_none, setD_none] = useState(true);

  useEffect(() => {
    //console.log(value)

    value !== "" ? setD_none(false) : setD_none(true);

    setList(() => {
      return prdList.filter((item) => {
        if (value !== "")
          if (item.name.toLowerCase().search(value) > -1) return item.name;
      });
    });
  }, [value]);
  return (
    <form className="d-flex p-re" onClickOutside={() => setD_none(true)}>
      <input
        placeholder="Bạn tìm gì ...."
        className="form-control me-2"
        type="search"
        aria-label="Search"
        onChange={(event) => {
          return setValue(
            removeVietnameseTones(event.target.value.toLowerCase())
          );
        }}
      />
      <button className="btn btn-dark " type="">
        <i className="bi bi-search-heart"></i>
      </button>

      <div
        className={`${
          d_none ? " d-none " : ""
        }  p-abs  bg-light overflow-scroll `}
        multiple
      >
        <h5>Có phải bạn đang tìm ...</h5>
        {list.map((i) => {
          //console.log(i.img);
          return (
            <>
              <div key={i.id}>
                <div className="card mb-1" style={{ width: "100%" }}>
                  <Link
                    className="text-dark"
                    to={`/ProductDetails/${i.id}`}
                    onClick={() => setD_none(true)}
                  >
                    <div className="row g-0">
                      <div className="col-md-3 d-flex  align-items-center">
                        <img
                          src={i.img[0]}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
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
                                    Number(i.price_Sale.replaceAll(".", ""))) *
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
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </form>
  );
}
export default memo(SearchPrd);
