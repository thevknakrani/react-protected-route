import React from "react";
import localStorage from "local-storage";

const ComponetAuthCheck = (AuthWrapper, compCode) => {
  return function NewComponent(props) {
    const isAuthentication = localStorage.get("auth");
    const compRole = localStorage.get("compRole");
    const hasPermission = (compRole & compCode) === compCode
    return isAuthentication ? (
      hasPermission ? (
        <AuthWrapper {...props} />
      ) : (
        <></>
      )
    ) : (
      <></>
    );
  };
};
export default ComponetAuthCheck;
