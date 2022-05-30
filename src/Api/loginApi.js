import axiosClient from "./axiosClient";

const loginApi = {
  post: (params) => {
    const url = "/users";
    return axiosClient.post(url, {
      baseURL: process.env.REACT_APP_API_ULR_2,
      params,
    });
  },
  get: (id, params) => {
    const url = `/users/${id}`;
    return axiosClient.get(url, {
      baseURL: process.env.REACT_APP_API_ULR_2,
      params,
    });
  },
};
export default loginApi;
