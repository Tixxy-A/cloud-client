import { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const UserFormPage = () => {
  const navigate = useNavigate();
  const { provider } = useAppContext();

  return (
    <>
      {provider && <Navigate to={"/"} />}
      {!provider && <UserForm />};
    </>
  );
};

export default UserFormPage;
