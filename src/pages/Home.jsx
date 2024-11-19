import React from "react";
import { Link } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import MovieList from "./MovieList";
import axios from "axios";
import { login, logout } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const movielist = [
    { path: "/now_playing", name: "nowplaying" },
    { path: "/popular", name: "Popular" },
    { path: "/top_rated", name: "TopRated" },
  ];

  const moviemap = movielist.map((el) => {
    const { path, name } = el;

    return <MovieList path={path}>{name}</MovieList>;
  });

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">아이디: </label>
        <input type="text" />

        <label htmlFor="">비밀번호: </label>
        <input type="text" />

        {isLoggedIn ? (
          <button
            onClick={() => {
              dispatch(logout());
              // 홈으로 보내
            }}
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            로그인
          </button>
        )}
      </form>

      {isLoggedIn && <div>{moviemap}</div>}
    </>
  );
}
