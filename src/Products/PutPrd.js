import productApi from "../Api/productApi";
import { useState, useEffect, useMemo, useCallback, memo } from "react";
function PutPrd() {
  const [name, setName] = useState("");
  const [img, setImg] = useState([]);
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [desc, setDesc] = useState([]);

  const [memory, setMemory] = useState("");

  const [manufacturer_id, setManufacturer_id] = useState("");
  const [color_id, setColor_id] = useState("");
  const [price_sale, setPrice_sale] = useState("");
  const [quantity, setQuantity] = useState(() =>
    (Math.random() * 1000).toFixed()
  );
  const [defaultLink, setDefaultLink] = useState("");

  const [id, setId] = useState("");
  const [p, setP] = useState("");

  const reset = useCallback(() => {
    setName("");
    setImg([]);
    setPrice("");
    setPriceSale("");
    setDesc([]);
    setManufacturer_id("");
    setColor_id("");
    setPrice_sale("");
    setQuantity(() => (Math.random() * 1000).toFixed());
    setId("");
    setP("");
    setMemory("");
  }, []);
  const putPrd = useCallback(async () => {
    const data = {
      name: name,
      img: img,
      price: price,
      price_Sale: priceSale,
      desc: desc,
      manufacturer_id: manufacturer_id,
      color_id: color_id,
      quantity: quantity,
      memory: memory,
    };
    for (const key in data) {
      data[key] == "" || data[key] == null ? delete data[key] : "";
    }

    try {
      await productApi.put(id, data);

      location.reload();
    } catch (error) {
      console.log("failed to putPrd");
      alert("put error");
    }
  });
  const postPrd = useCallback(async () => {
    const data = {
      name: name,
      img: img,
      price: price,
      price_Sale: priceSale,
      desc: desc,
      manufacturer_id: manufacturer_id,
      color_id: color_id,
      quantity: quantity,
      memory: memory,
    };

    for (const key in data) {
      data[key] == "" || data[key] == null ? delete data[key] : "";
    }
    try {
      await productApi.post(data);
      reset();
    } catch (error) {
      console.log("failed to postPrd");
    }
  });

  return (
    <div className="mt-5 p-5 bg-warning ">
      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label">
          name
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={name}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          manufacturer_id
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={manufacturer_id}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setManufacturer_id(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          color_id
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={color_id}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setColor_id(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          memory
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={memory}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setMemory(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label">
          quantity
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={quantity}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label">
          id
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={id}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          price
        </label>
        <div className="col-sm-10">
          <input
            value={price}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          price Sale
        </label>
        <div className="col-sm-10">
          <input
            value={priceSale}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setPriceSale(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label pt-2">
          img
        </label>
        <div className="col-sm-10 p-2 border border-dark">
          <label for="inputValue" className=" d-flex">
            <input
              type="checkbox"
              onClick={(e) =>
                e.target.checked
                  ? setDefaultLink(e.target.e.target.parentNode.innerText)
                  : null
              }
            ></input>
          </label>
          <label for="inputValue" className=" d-flex ">
            <input type="checkbox" onClick={(e) => setDefaultLink("")}></input>
          </label>
          <input
            value={img[0]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={
              (e) => (img[0] = defaultLink + e.target.value)
              //   setImg((i) => {
              //     return [...i, (i[2] = e.target.value)];
              //   })
            }
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[1] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[2] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[3] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[4] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[5] = defaultLink + e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputValue" className="col-sm-2 col-form-label">
          desc
        </label>
        <div className="col-sm-10 p-2 border border-dark">
          <input
            value={desc[0]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[0] = e.target.value)}
          />
          <input
            value={desc[1]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[1] = e.target.value)}
          />
          <input
            value={desc[2]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[2] = e.target.value)}
          />
          <input
            value={desc[3]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[3] = e.target.value)}
          />
          <input
            value={desc[4]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[4] = e.target.value)}
          />
          <input
            value={desc[5]}
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onChange={(e) => (desc[5] = e.target.value)}
          />
        </div>
      </div>

      <div className="col-auto  d-flex justify-content-evenly">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={() => postPrd()}
        >
          POST
        </button>
        <button
          type=""
          className={`btn btn-primary mb-3 ${id == "" ? "disabled" : ""}`}
          onClick={() => putPrd()}
        >
          PUT
        </button>
      </div>
    </div>
  );
}
export default PutPrd;
