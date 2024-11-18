import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TopRated() {
  const baseURL = "https://api.themoviedb.org/3/movie";
  const path = "/top_rated";
  const params = new URLSearchParams({
    api_key: "56daa931cc7f953de7359b43531fa672",
    language: "ko",
  });

  const URL = `${baseURL}${path}?${params}`;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const reponse = await axios.get(URL);

        let data = reponse.data;

        data = data.results;

        const dataimg = data.map((el) => {
          const imgs = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
          return (
            <div>
              <img src={imgs} alt="" />
              <div>{el.title}</div>
            </div>
          );
        });

        setPosts(dataimg);
      } catch {}
    }
    fetchPost();
  }, []);

  console.log(posts);

  return <div>{posts}</div>;
}
