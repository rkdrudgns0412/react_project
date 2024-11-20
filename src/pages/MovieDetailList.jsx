import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieListApi from "../api/movieListApi";

export default function MovieDetailList({ id }) {
  console.log(id);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      let data = await movieListApi.getPostId(id);

      data = data.results;

      console.log(data);

      setPosts(data);
    }
    fetchPost();
  }, []);

  log

  return <></>;

  // return
  //   <div style={{ display: "flex" }}>
  //   {posts.map((el) => {
  //     const imgs = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
  //     return (
  //       <Link style={{ margin: "10px" }} to={`/${el.id}`}>
  //         <div key={el.id}>
  //           <img
  //             style={{ width: "300px", height: "400px" }}
  //             src={imgs}
  //             alt=""
  //           />
  //           <div style={{ fontWeight: "bolder", color: "red" }}>
  //             {el.title}
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   })}
  // </div>
  // );
}
