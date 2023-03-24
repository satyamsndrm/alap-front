import axios from '../utils/axios';
import { getUser, removeUserAndToken, setSession, setUser } from '../utils/jwt';
import { useCallback, useEffect, useState } from 'react';

const useAuth = () => {
  const [userDetail, setUserDetail] = useState({ abcd: true });

  const loginUser = async (data) => {
    const response = await axios.post(`/api/auth/login`, data);
    const loginData = response;
    if (loginData) {
      const { user, token } = loginData;
      setSession(token);
      setUser(user);
      setUserDetail(() => user);
      return user;
    }
  };
  const initialize = async () => {
    // EXTRA
    try {
      const accessToken = window.localStorage.getItem('token');
      const user = getUser();
      if (accessToken) {
        const token = accessToken;
        setSession(token);
        setUserDetail(() => user);
        return { user, token };
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new Error();
    }
  };
  const logout = async () => {
    removeUserAndToken();
    window.location.reload();
  };
  const getUserDetail = useCallback(() => {
    return userDetail;
  }, [userDetail]);

  return {
    loginUser,
    // getAccountDetails,
    initialize,
    logout,
    userDetail,
    setUserDetail,
    getUserDetail,
  };
};

export default useAuth;

export const useUserInfo = () => {
  const [userDetail, setUserDetail] = useState({ abcd: true });
  useEffect(() => {
    const user = getUser();
    setUserDetail(user);
  }, []);
  return { userDetail };
};
