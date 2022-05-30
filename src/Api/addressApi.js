import axiosClient from './axiosClient';
// api/productApi.js
const addressApi = {
    getAll: (params) => {
        const url = '/?depth=3';
        return axiosClient.get(url, {
            params,
            baseURL: process.env.REACT_APP_API_ADDRESS,
        });
    },
    //   put: (id, params) => {
    //     const url = `/products/${id}`;
    //     console.log(params);

    //     return axiosClient.put(url, params);
    //   },
    //   post: (params) => {
    //     const url = "/products";
    //     console.log(params);

    //     return axiosClient.post(url, params);
    //   },
};

export default addressApi;
