import React, { useEffect, useState } from "react";
import movieListApi from "../api/movieListApi";
import { Link } from "react-router-dom";

export default function MovieList({ path, children }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPost() {
  
      let data = await movieListApi.getPostId(path);

      data = data.results;
     
      const dataimg = data.map((el) => {
        const imgs = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
        return (
          <div key={el.id}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imgs}
              alt=""
            />
            <div>{el.title}</div>
          </div>
        );
      });

      setPosts(dataimg.slice(0, 5));
    }
    fetchPost();
  }, []);

  return (
    <>
      <Link to={`/${children}`}>더보기</Link>
      <h3>{children}</h3>
      <div style={{ display: "flex" }}>{posts}</div>
    </>
  );
}
