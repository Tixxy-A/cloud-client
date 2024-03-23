import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

function SignUp({ userType }) {
  const { user, provider, showAlert, admin } = useAppContext();
  // console.log(userType);
  const navigate = useNavigate();
  useEffect(() => {
    if (admin && !showAlert) navigate("/admin");
    else if ((user || provider || admin) && !showAlert) {
      navigate("/");
    }
  }, [user, showAlert, provider, navigate, admin]);

  return <Form userType={userType} />;
}

export default SignUp;
