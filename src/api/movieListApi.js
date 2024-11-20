import axios from "axios";
import api from "./axios";

const movieListApi = {
  // 1. 리스트 get
  getPostId: async (path) => {
    const response = await api.get(path);
    return response.data;
  },
 =
};

export default movieListApi;
