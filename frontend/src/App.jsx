import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Sell from "./pages/Sell";
import Feed from "./pages/Feed";
import LoginSignup from "./pages/LoginSignup";
import Post from "./pages/Post";
import Main from "./pages/Main";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import {atom} from "jotai"
import MySales from "./pages/MySales";
import ProductCarousell from "./pages/ProductCarousell";


export const userAtom = atom({})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}>
            <Route path={"/"} element={<Home />}>
              <Route path={"/"} element={<ProductCarousell />} />
              <Route path={"/search/:id"} element={<Search />} />
            </Route>
            <Route path={"/sell"} element={<Sell />} />
            <Route path={"/feed"} element={<Feed />} />
            <Route path={"/login"} element={<LoginSignup />} />
            <Route path={"/post/:id"} element={<Post />} />
            
            <Route path={"/user/:id"} element={<UserProfile />} />
            <Route path={"/mysales"} element={<MySales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
