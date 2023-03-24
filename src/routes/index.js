import { Route } from 'react-router-dom';
import DashboardLayout from '../layout/dashboard';
import DashBoard from '../views/DashBoard';
import { dashboardRoutes } from './dashboard';

const userDashboardRoutes = (
  <Route path={'/dashboard'} element={<DashboardLayout />}>
    {dashboardRoutes.map((item, index) => (
      <Route key={index} path={item.path} element={item.component} />
    ))}
  </Route>
);

export default function RenderRoutes() {
  return (
    <>
      <Route path='/' element={<DashBoard />} />
      {/* <Route path={'/dashboard'} element={<DashboardLayout />}>
        {dashboardRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Route> */}
    </>
  );
}
