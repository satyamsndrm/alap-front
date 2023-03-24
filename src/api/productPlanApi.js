import axiosInstance from '../utils/axios';

export const fetchAllProductPlan = (id) => {
  return axiosInstance.get(`/ProductPlaning`);
};

export const createProductPlan = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: id ? `/v1/ProductPlaning/update` : '/ProductPlaning',
    data,
    // query: true,
  });
};
