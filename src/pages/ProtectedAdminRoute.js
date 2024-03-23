import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedAdminRoute = ({ children, type }) => {
  const { admin } = useAppContext();
  // console.log(user);`
  // const navigate = useNavigate();
  return (
    <>
      {!admin && <Navigate to={"/signinAdmin"} />}
      {admin && children}
    </>
  );
};
export default ProtectedAdminRoute;
