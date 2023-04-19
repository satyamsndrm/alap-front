import axiosInstance from '../utils/axios';

export const fetchAllNotebook = (id) => {
  return axiosInstance.get(`/Notebook`);
};

export const createNotebook = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/Notebook',
    data,
  });
};
