import axiosInstance from '../utils/axios';

export const fetchAllSwotAnalysis = (id) => {
  return axiosInstance.get(`/SwotAnalysis`);
};

export const createSwotAnalysis = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/SwotAnalysis',
    data,
  });
};
