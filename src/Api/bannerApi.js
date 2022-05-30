import axiosClient from "./axiosClient";
// api/productApi.js
const bannerApi = {
  getAll: (params) => {
    const url = "/banner";
    return axiosClient.get(url, { params });
  },
  getBanner: (params) => {
    const url = "/banner";
    return axiosClient.get(url, { params });
  },
  post: (params) => {
    const url = "/banner";
    console.log(params);
    return axiosClient.post(url, params);
  },
  put: (id, params) => {
    const url = `/banner/${id}`;
    console.log(params);

    return axiosClient.put(url, params);
  },
};

export default bannerApi;
