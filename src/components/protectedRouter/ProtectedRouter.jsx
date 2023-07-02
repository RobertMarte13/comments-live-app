import { Outlet, Navigate } from "react-router-dom";


const ProtectedRouter = ({ isValidation, children, redirect='/' }) => {

  if (!isValidation) {
    console.log('entro')
    return <Navigate to="/register" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRouter;
