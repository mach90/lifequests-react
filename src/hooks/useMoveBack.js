import { useNavigate } from 'react-router-dom';

/* //////////////////////////////////////////////////
CUSTOM HOOK TO NAVIGATE TO THE PREVIOUS ROUTE
////////////////////////////////////////////////// */
export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}