import React from "react";
import { Link } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import MovieList from "./MovieList";
import axios from "axios";

export default function Home() {
  const movielist = [
    { path: "/now_playing", name: "nowplaying" },
    { path: "/popular", name: "Popular" },
    { path: "/top_rated", name: "Top Rated" },
  ];

  const moviemap = movielist.map((el) => {
    const { path, name } = el;

    return <MovieList path={path}>{name}</MovieList>;
  });

  return (
    <>
      <form action="">
        <label htmlFor="">아이디: </label>
        <input type="text" />

        <label htmlFor="">비밀번호: </label>
        <input type="text" />

        <input type="submit" value="로그인" />
      </form>

      <div>{moviemap}</div>
    </>
  );
}
