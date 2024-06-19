import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const ButtonGoogle = () => {
  const handleSuccess = (response) => {
    console.log("Login successful:", response);
  };

  const handleFailure = (error) => {
    console.error("Login failed:", error);
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
