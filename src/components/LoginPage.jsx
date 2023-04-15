import React from "react";
import { Button } from "react-bootstrap";
import useAuthentication from "./customHooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import useAuthorization from "./customHooks/useAuthorization";
import { COMPONENT_ROLES, ROLES } from "../helpers/constant";

const LoginPage = () => {
  const { handleLogin } = useAuthentication();
  const { assignRole, assignCompRole } = useAuthorization();
  const navigate = useNavigate();
  const handleUserClick = () => {
    handleLogin();
    assignRole(ROLES.USER);
    assignCompRole(COMPONENT_ROLES.USER);
    navigate("/");
  };
  const handleAdminClick = () => {
    handleLogin();
    assignRole(ROLES.ADMIN);
    assignCompRole(COMPONENT_ROLES.ADMIN);
    navigate("/");
  };
  const handleSuperAdminClick = () => {
    handleLogin();
    assignRole(ROLES.SUPER_ADMIN);
    assignCompRole(COMPONENT_ROLES.SUPER_ADMIN);
    navigate("/");
  };
  const handleGuestClick = () => {
    handleLogin();
    assignRole(ROLES.GUEST);
    assignCompRole(COMPONENT_ROLES.GUEST);
    navigate("/");
  };
  return (
    <div className="mt-4">
      <h1>
        <center>Login page</center>
      </h1>
      <br />
      <br />
      <center>
        <Button className="ms-3" onClick={handleUserClick}>
          User-Login
        </Button>
        <Button className="ms-3" onClick={handleGuestClick}>
          Guest-Login
        </Button>
        <Button className="ms-3" onClick={handleAdminClick}>
          Admin-Login
        </Button>
        <Button className="ms-3" onClick={handleSuperAdminClick}>
          Super-Admin-Login
        </Button>
      </center>
    </div>
  );
};

export default LoginPage;
