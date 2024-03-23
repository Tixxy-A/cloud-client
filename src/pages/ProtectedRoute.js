import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children, type }) => {
  const { user, provider } = useAppContext();
  // console.log(user);`
  // const navigate = useNavigate();
  return (
    <>
      {!user && !provider && <Navigate to={"/landing"} />}
      {(user || provider) && children}
    </>
  );
};
export default ProtectedRoute;
