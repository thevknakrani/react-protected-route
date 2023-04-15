import React from "react";
import localStorage from "local-storage";
import Unauthorise from "./Unauthorise";

const AuthenticationCheck = (AuthWrapper, pageCode) => {
  return function NewComponent(props) {
    const isAuthentication = localStorage.get("auth");
    const userRole = localStorage.get("userRole");
    const hasPermission = (userRole & pageCode) === pageCode
    return isAuthentication ? (
      hasPermission ? (
        <AuthWrapper {...props} />
      ) : (
        <Unauthorise />
      )
    ) : (
      <Unauthorise />
    );
  };
};
export default AuthenticationCheck;
