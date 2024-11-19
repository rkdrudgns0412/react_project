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
          <Link to={`/${el.id}`}>
            <div key={el.id}>
              <img
                style={{ width: "300px", height: "400px" }}
                src={imgs}
                alt=""
              />
              <div style={{fontWeight: "bolder", color: "red"}}>{el.title}</div>
            </div>
          </Link>
        );
      });

      setPosts(dataimg.slice(0, 5));
    }
    fetchPost();
  }, []);

  return (
    <>
      <h3>
        {children}
        <button style={{ margin: "20px", width: "60px", height: "30px" }}>
          <Link
            style={{ fontWeight: "bolder", color: "green" }}
            to={`/${children}`}
          >
            더보기
          </Link>
        </button>
      </h3>
      <div style={{ display: "flex" }}>{posts}</div>
    </>
  );
}
