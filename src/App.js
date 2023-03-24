import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JwtProvider from './providers/JwtProvider';
import { SnackbarProvider } from 'notistack';
import DashboardLayout from './layout/dashboard';
import { dashboardRoutes } from './routes/dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 2,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{ horizontal: 'top', vertical: 'right' }}
        >
          <Routes>
            <Route path={'/'} element={<DashboardLayout />}>
              {dashboardRoutes.map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
              ))}
            </Route>
          </Routes>
        </SnackbarProvider>
      </HashRouter>
    </QueryClientProvider>
  );
}

// function App() {
//   return (
//     <>
//       <NavBar />
//       <DashBoard />
//       {/* <ProductPlan /> */}
//     </>
//   );
// }
