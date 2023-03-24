import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import DashBoardNavBar from './NavBar/DashBoardNavBar';

const DashboardLayout = () => {
  return (
    <>
      <DashBoardNavBar />
      <Outlet />
      {/* <div className="w-100">
        <div className="w-100">
            <Nav />
        </div>
        <Outlet />
    </div> */}
    </>
  );
};
export default DashboardLayout;
