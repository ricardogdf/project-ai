import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { useAuth } from "../../context/authContext";

const ButtonFacebook = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = ({ userID }) => {
    login(userID);
    navigate("/home");
  };

  const handleFailure = () => {
    Toast.error({
      message: "Erro ao fazer login com o facebook. Contate o suporte!",
    });
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      onSuccess={handleSuccess}
      onFail={handleFailure}
      render={({ onClick, logout }) => (
        <Button
          onClick={onClick}
          onLogoutClick={logout}
          sx={{
            height: "40px",
            justifyContent: "space-between",
            pr: "50px",
            textTransform: "none",
            color: "var(--primary-color)",
            borderColor: "#dadce0",
            "&: hover": {
              borderColor: "#dadce0",
            },
          }}
          variant="outlined"
          startIcon={<FacebookIcon />}
        >
          Fazer login com o facebook
        </Button>
      )}
    />
  );
};

export default ButtonFacebook;
