import axiosInstance from '../utils/axios';

export const fetchAllPestleAnalysis = (id) => {
  return axiosInstance.get(`/PestleAnalysis`);
};

export const createPestleAnalysis = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/PestleAnalysis',
    data,
  });
};
