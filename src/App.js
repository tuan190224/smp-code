import "./App.css";
import React, { useState, useEffect, memo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import bannerApi from "./Api/bannerApi";
import Footer from "./Footer/Footer";
import { MainMenu, SelectMenu } from "./NavBar";
import Home from "./Home/Home";
import { ProductDetails, Products, PutPrd } from "./Products";
import PutBanner from "./Api/PutBanner";
import Cart from "./Cart/Cart";
import { KhuiApple, BaoHanh, DoiTra, Tintuc } from "./Pages";
import { Login, Signin } from "./login";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <SelectMenu />
      <Routes>
        <Route path="/SmartPhone/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products/:id" element={<Products />}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
        <Route path="/PutPrd" element={<PutPrd />}></Route>
        <Route path="/PutBanner" element={<PutBanner />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/KhuiApple" element={<KhuiApple />}></Route>
        <Route path="/BaoHanh" element={<BaoHanh />}></Route>
        <Route path="/DoiTra" element={<DoiTra />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Tintuc" element={<Tintuc />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
