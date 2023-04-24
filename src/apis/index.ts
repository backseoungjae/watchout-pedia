import axios from "axios";

// 공통으로 사용될 인스턴스
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/3`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
});

export default axiosInstance;
