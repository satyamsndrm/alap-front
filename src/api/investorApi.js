import axiosInstance from '../utils/axios';

export const fetchAllInvestor = (id) => {
  return axiosInstance.get(`/Investor`);
};

export const createInvestor = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/Investor',
    data,
  });
};
