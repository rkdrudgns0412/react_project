import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import movieListApi from "../api/movieListApi";
import MyPage from "./MyPage";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../store/slices/mySlice";

export default function MovieDetail() {
  const { detailId } = useParams();

  const idlist = useSelector((state) => state.click);

  const [ok, setok] = useState(false);

  const [post, setPost] = useState({});

  const [content, setContent] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPost() {
      const data = await movieListApi.getPostId(detailId);

      let dataContent = await movieListApi.getPostId(`${detailId}/reviews`);

      dataContent = dataContent.results;

      setPost(data);
      setContent(dataContent);
    }
    fetchPost();
  }, []);

  const imgs = `https://image.tmdb.org/t/p/w500${post?.poster_path}`;

  function handlebutton() {
 
    console.log(idlist);

    if (!idlist?.find((el) => parseInt(el.id) === parseInt(detailId))) {
      console.log(detailId);
      dispatch(addPost({ id: detailId }));
    }
    setok(true);
  }

  return (
    <div>
      <img style={{ width: "200px", height: "300px" }} src={imgs} alt="" />
      <span style={{ margin: "0px 10px" }}>
        {ok ? (
          <button
            onClick={() => {
              setok(false);

              const idlists = idlist.filter((el) => {
                if (el.id != detailId) {
                  return el;
                }
              });
              dispatch(deletePost(idlist));
              console.log(idlists);
            }}
          >
            선택 취소
          </button>
        ) : (
          <button onClick={handlebutton}>선택</button>
        )}
      </span>
      <h3>제목</h3>
      <div>{post?.title}</div>
      <h3>줄거리</h3>
      <div>{post?.overview}</div>
      <h3>후기</h3>
      <ul>
        {content?.map((el) => {
          return <li>{el.content}</li>;
        })}
      </ul>
    </div>
  );
}
