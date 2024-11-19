import axios from "axios";
import api from "./axios";

const movieListApi = {
  // 1. 리스트 get
  getPost: async () => {
    const nowpath = "/now_playing";
    const response = await api.get(nowpath);
    return response.data;
  },
  // // 2. 개별 get
  // getPostById: async (postId) => {
  //   const response = await api.get(`${postId}`);
  //   return response.data;
  // },
  // // 3. post
  // createPost: async (formData) => {
  //   const response = await api.post("", formData);
  //   return response.data;
  // },
};

export default movieListApi;
