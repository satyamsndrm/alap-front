import axios from './axios';

export const setSession = (accessToken) => {
  const token = `Token ${accessToken}`;
  axios.defaults.headers.common.Authorization = token;
  window.localStorage.setItem('token', token);
};

export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};
export const getUser = () => {
  const user = window.localStorage.getItem('user');
  try {
    return JSON.parse(user);
  } catch (err) {
    console.log('err', err);
    return {};
  }
};

export const setToken = () => {
  const accessToken = window.localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = accessToken;
};
export const setCSRFToken = (csrftoken) => {
  window.localStorage.setItem('csrftoken', csrftoken);
};

export const removeUserAndToken = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
};
