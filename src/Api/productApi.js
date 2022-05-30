import axiosClient from "./axiosClient";
// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  put: (id, params) => {
    const url = `/products/${id}`;
    console.log(params);

    return axiosClient.put(url, params);
  },
  post: (params) => {
    const url = "/products";
    console.log(params);

    return axiosClient.post(url, params);
  },
};

export default productApi;
