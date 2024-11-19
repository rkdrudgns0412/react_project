import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import movieListApi from "../api/movieListApi";

export default function MovieDetail() {
  const { detailId } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      const data = await movieListApi.getPostId(detailId);

      const { poster_path, title, overview } = data;

      let dataContent = await movieListApi.getPostId(`${detailId}/reviews`);

      dataContent = dataContent.results;

      const dataContentlist = dataContent.map((el) => {
        console.log(el);

        return <li>{el.content}</li>;
      });

      const imgs = `https://image.tmdb.org/t/p/w500${poster_path}`;

      const dataimg = (
        <div>
          <img style={{ width: "200px", height: "300px" }} src={imgs} alt="" />
          <h3>제목</h3>
          <div>{title}</div>
          <h3>줄거리</h3>
          <div>{overview}</div>
          <h3>후기</h3>
          <ul>{dataContentlist}</ul>
        </div>
      );

      setPost(dataimg);
    }
    fetchPost();
  }, []);

  return <div>{post}</div>;
}
