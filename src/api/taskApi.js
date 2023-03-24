import axiosInstance from '../utils/axios';

export const fetchAllTask = (id) => {
  return axiosInstance.get(`/task`);
};

export const createTask = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: id ? `/v1/task/update?taskId=${id}` : '/task',
    data,
    // query: true,
  });
};
