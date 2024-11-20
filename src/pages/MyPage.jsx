import React from "react";
import { useSelector } from "react-redux";
import MovieDetailList from "./MovieDetailList";

export default function MyPage() {
  const id = useSelector((state) => state.click);

  console.log(id);

  const idmap = id.map((el) => {
    return <MovieDetailList id={el.id}></MovieDetailList>;
  });

  return <div>{idmap}</div>;
}
