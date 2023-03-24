import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function JwtProvider({}) {
  const { initialize } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    initialize()
      .then((data) => {
        const allowedNavigation = ['/', '/forgot-password'];
        if (allowedNavigation.indexOf(pathname) != -1) navigate('/dashboard');
      })
      .catch((err) => {
        navigate('/');
      });
  }, [pathname]);
  return <></>;
}
