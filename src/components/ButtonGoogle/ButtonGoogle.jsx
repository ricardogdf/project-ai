import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Toast from "../Toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ButtonGoogle = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = ({ credential }) => {
    login(credential);
    navigate("/home");
  };

  const handleFailure = () => {
    Toast.error({
      message: "Erro ao fazer login com o google. Contate o suporte!",
    });
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE}>
      <GoogleLogin
        width="320"
        height="50"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default ButtonGoogle;
