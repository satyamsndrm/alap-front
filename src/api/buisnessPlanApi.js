import axiosInstance from '../utils/axios';

export const fetchAllBuisnessPlan = (id) => {
  return axiosInstance.get(`/BuisnessPlans`);
};

export const createBuisnessPlan = ({ data, id }) => {
  return axiosInstance({
    method: id ? 'put' : 'post',
    url: '/BuisnessPlans',
    data,
  });
};
