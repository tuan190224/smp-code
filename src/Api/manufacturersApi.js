import axiosClient from "./axiosClient";
// api/productApi.js
const manufacturersApi = {
  getAll: (params) => {
    const url = "/manufacturers";
    return axiosClient.get(url, { params });
  },
};

export default manufacturersApi;
