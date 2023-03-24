import axios from 'axios';
import { BACKEND_URL } from './constant';
import { removeUserAndToken } from './jwt';

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data.data || 'Success';
    }
    return null;
  },
  function (error) {
    const { response } = error;
    const { status } = response;
    if ([401, 402, 403].indexOf(status) !== -1) {
      // alert(`API failed with ${status}`);
      removeUserAndToken();
      window.location.reload();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
