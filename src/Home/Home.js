import React, { useState, useEffect, memo } from "react";
import HomeBanner from "./HomeBanner";
import HomeBanner2 from "./HomeBanner2";
import Body from "./Body";
function Home(i) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(i.data);
  // }, [i.data.length]);
  return (
    <>
      <HomeBanner />
      <Body />
      <HomeBanner2 />
    </>
  );
}
export default memo(Home);
