import UserForm from "../components/UserForm/UserForm";
import { Navigate} from "react-router-dom";
import { useAppContext } from "../context/appContext";

const UserFormPage = () => {
  const { provider } = useAppContext();

  return (
    <>
      {provider && <Navigate to={"/"} />}
      {!provider && <UserForm />};
    </>
  );
};

export default UserFormPage;
