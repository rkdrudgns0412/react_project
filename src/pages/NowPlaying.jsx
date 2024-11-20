import React, { useEffect, useState } from "react";
import axios from "axios";
import movieListApi from "../api/movieListApi";
import { Link } from "react-router-dom";

export default function NowPlaying() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const path = "/now_playing";

      let data = await movieListApi.getPostId(path);

      data = data.results;

      setPosts(data);
    }
    fetchPost();
  }, []);

  return (
    <div>
      {posts.map((el) => {
        const imgs = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
        return (
          <Link to={`/${el.id}`}>
            <div key={el.id}>
              <img src={imgs} alt="" />
              <div>{el.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
