import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const user = useSelector((state) => state.user.user);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
