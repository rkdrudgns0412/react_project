import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <h1>MOVIE</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
      <Outlet></Outlet>
    </>
  );
}
