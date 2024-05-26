import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type RouteGuardProps = {
  children: React.ReactNode;
};

export const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return <>{children}</>;
};
