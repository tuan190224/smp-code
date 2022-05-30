import React, { useEffect, memo } from "react";
import { useState } from "react";
import bannerApi from "../Api/bannerApi";

const HomeBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await bannerApi.getAll();
        //console.log(response);

        setData(response.find((item) => item.bannerID == "home1").img);
      } catch (error) {
        console.log("failed to banner");
      }
    };
    fetchBanner();
  }, []);

  return (
    <div className="HomeBanner">
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={"carousel-item active"}>
            <div className="d-block">
              <div>
                <img src={data[0]} className=" w--50" alt="..." />
                <img src={data[1]} className=" w--50" alt="..." />
              </div>
            </div>
          </div>
          <div className={"carousel-item"}>
            <div className="d-block">
              <div>
                <img src={data[2]} className=" w--50" alt="..." />
                <img src={data[3]} className=" w--50" alt="..." />
              </div>
            </div>
          </div>
          <div className={"carousel-item"}>
            <div className="d-block">
              <div>
                <img src={data[4]} className=" w--50" alt="..." />
                <img src={data[5]} className=" w--50" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev rounded-circle"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default memo(HomeBanner);
