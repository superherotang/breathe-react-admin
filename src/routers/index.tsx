import Layout from '@/components/Layout';
import NotFound from '@/pages/Error/NotFound';
import Login from '@/pages/Login';
import { Navigate, useRoutes } from 'react-router-dom';

export default () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/home' />
    },
    {
      path: '/home',
      element: <Layout />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/guide',
      element: <Navigate to='/guide/start' />
    },

    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to='/404' />
    },
    {
      path: '/',
      element: <Navigate to='/home' />
    }
  ]);
  return element;
};
