import React from "react";
import FacebookLogin from "react-facebook-login";
import "./ButtonFacebook.css";

const ButtonFacebook = () => {
  const responseFacebook = (response) => {
    console.log("Login successful:", response);
  };

  return (
    <FacebookLogin
      textButton="Fazer login com o Facebook"
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon="fa-facebook"
    />
  );
};

export default ButtonFacebook;
