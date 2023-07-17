import { Outlet, Navigate } from "react-router-dom";


const ProtectedRouter = ({ isValidation, children}) => {

  if (!isValidation) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRouter;
