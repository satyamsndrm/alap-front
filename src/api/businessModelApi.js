import axiosInstance from '../utils/axios';

export const fetchAllBusinessModel = (id) => {
  return axiosInstance.get(`/BusinessModels`);
};

export const createBusinessModel = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/BusinessModels',
    data,
  });
};
