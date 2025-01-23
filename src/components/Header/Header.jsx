import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main_header">
        <ul className="header_content">
          <img src={assets.logo} alt="" href="/"/>
          <Link as={Link} to="/" className="content_value">
            Movie
          </Link>
          <Link as={Link} to="/watchlist" className="content_value">
            Watch List
          </Link>
        </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;
