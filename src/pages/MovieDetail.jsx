import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import movieListApi from "../api/movieListApi";
import { useDispatch, useSelector } from "react-redux";
import { selects, noselects } from "../store/slices/authSlice";

export default function MovieDetail() {
  const { detailId } = useParams();

  const { isSelectIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      const data = await movieListApi.getPostId(detailId);

      const { poster_path, title, overview } = data;

      let dataContent = await movieListApi.getPostId(`${detailId}/reviews`);

      dataContent = dataContent.results;

      const dataContentlist = dataContent.map((el) => {
        return <li>{el.content}</li>;
      });

      const imgs = `https://image.tmdb.org/t/p/w500${poster_path}`;

      console.log(isSelectIn);

      const dataimg = (
        <div>
          <img style={{ width: "200px", height: "300px" }} src={imgs} alt="" />
          <span style={{ margin: "0px 10px" }}>
            {isSelectIn ? (
              <button
                onClick={() => {
                  dispatch(selects());
                  // 홈으로 보내
                }}
              >
                선택
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(noselects());
                }}
              >
                선택 취소
              </button>
            )}
          </span>
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
