import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieListApi from "../api/movieListApi";

export default function MovieDetailList({ id }) {
  console.log(id);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      let data = await movieListApi.getPostId(id);

      setPosts(data);
    }
    fetchPost();
  }, []);

  console.log(posts);

  const imgs = `https://image.tmdb.org/t/p/w500${posts.poster_path}`;

  return (
    <div style={{ display: "flex" }}>
      <Link style={{ margin: "10px" }} to={`/${posts.id}`}>
        <div key={posts.id}>
          <img style={{ width: "300px", height: "400px" }} src={imgs} alt="" />
          <div style={{ fontWeight: "bolder", color: "red" }}>
            {posts.title}
          </div>
        </div>
      </Link>
    </div>
  );
}
