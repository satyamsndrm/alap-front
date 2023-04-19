import axiosInstance from '../utils/axios';

export const fetchAllPestAnalysis = (id) => {
  return axiosInstance.get(`/PestAnalysis`);
};

export const createPestAnalysis = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/PestAnalysis',
    data,
  });
};
