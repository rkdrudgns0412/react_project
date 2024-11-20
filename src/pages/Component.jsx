import React, { useEffect, useState } from "react";
import axios from "axios";
import movieListApi from "../api/movieListApi";

export default function TopRated({path}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const path = path;

        let data = await movieListApi.getPostId(path);

        data = data.results;

        setPosts(data);
      } catch {}
    }
    fetchPost();
  }, []);

  return (
    <div>
      {posts.map((el) => {
        const imgs = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
        return (
          <div key={el.id}>
            <img src={imgs} alt="" />
            <div>{el.title}</div>
          </div>
        );
      })}
    </div>
  );
}
