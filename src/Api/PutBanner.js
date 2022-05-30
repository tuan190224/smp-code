import bannerApi from "../Api/bannerApi";
import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
function PutPrd() {
  //const [name, setName] = useState("");
  const [img, setImg] = useState([]);
  // //const [price, setPrice] = useState("");
  // const [priceSale, setPriceSale] = useState("");
  // const [desc, setDesc] = useState([]);
  // const [manufacturer_id, setManufacturer_id] = useState("");
  // const [color_id, setColor_id] = useState("");
  // const [price_sale, setPrice_sale] = useState("");
  // const [quantity, setQuantity] = useState(() =>
  //   (Math.random() * 1000).toFixed()
  // );
  const [bannerID, setBannerID] = useState("");
  const [defaultLink, setDefaultLink] = useState("");
  const [id, setId] = useState("");
  const [p, setP] = useState("");

  const reset = useCallback(() => {
    setImg(["", ""]);
    setBannerID("");
  }, []);
  const putPrd = useCallback(async () => {
    try {
      await bannerApi.put(id, {
        img: img,
        bannerID: bannerID,
      });
      location.reload();
    } catch (error) {
      console.log("failed to putPrd");
    }
  });

  const postPrd = useCallback(async () => {
    try {
      await bannerApi.post({
        img: img,
        bannerID: bannerID,
      });
      reset();
    } catch (error) {
      console.log("failed to postPrd");
    }
  });

  return (
    <div className="mt-5 p-5 bg-warning ">
      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label">
          bannerId
        </label>
        <div className="col-sm-10 w-50">
          <input
            value={bannerID}
            type="text"
            className="form-control"
            id="inputValue"
            onChange={(e) => setBannerID(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="mb-3 row">
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
      </div> */}
      {/* <div className="mb-3 row">
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
      </div> */}

      {/* <div className="mb-3 row ">
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
      </div> */}
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
      {/* <div className="mb-3 row">
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
      </div> */}
      {/* <div className="mb-3 row">
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
      </div> */}
      <div className="mb-3 row ">
        <label for="inputValue" className="col-sm-2 col-form-label pt-2">
          img
        </label>
        <div className="col-sm-10 p-2 border border-dark">
          <label for="inputValue" className="">
            {defaultLink}
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={
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
            onBlur={(e) => (img[6] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[7] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[8] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[9] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[10] = defaultLink + e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="inputValue"
            onBlur={(e) => (img[11] = defaultLink + e.target.value)}
          />
        </div>
      </div>

      {/* <div className="mb-3 row">
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
      </div> */}

      <div class="col-auto  d-flex justify-content-evenly">
        <button
          type="submit"
          class="btn btn-primary mb-3"
          onClick={() => postPrd()}
        >
          POST
        </button>
        <button type="" class="btn btn-primary mb-3" onClick={() => putPrd()}>
          PUT
        </button>
      </div>
    </div>
  );
}
export default PutPrd;
