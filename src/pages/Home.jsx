import React from "react";
import { Link } from "react-router-dom";
import NowPlaying from "./NowPlaying";

export default function Home() {
  return (
    <>
      <form action="">
        <label htmlFor="">아이디: </label>
        <input type="text" />

        <label htmlFor="">비밀번호: </label>
        <input type="text" />

        <input type="submit" value="로그인" />
      </form>

      <div>
        <h3>Now Playing</h3>
        <ul>
          <li></li>
          <Link to={"/nowplaying"}>더보기</Link>
        </ul>
      </div>

      <div>
        <h3>Popular</h3>
        <ul>
          <li></li>
          <Link to={"/popular"}>더보기</Link>
        </ul>
      </div>

      <div>
        <h3>Top Rated</h3>
        <ul>
          <li></li>
          <Link to={"/toprated"}>더보기</Link>
        </ul>
      </div>
    </>
  );
}
