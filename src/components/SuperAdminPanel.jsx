import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthenticationCheck from "./AuthenticationCheck";
import { COMPONENT_CODE, PAGES_CODE } from "../helpers/constant";
import UserComponent from "./UserComponent";
import AdminComponent from "./AdminComponent";
import SuperAdminComponent from "./SuperAdminComponent";
import ComponetAuthCheck from "./ComponetAuthCheck";
import GuestComponent from "./GuestComponent";

const SuperAdminPanel = () => {
  const navigate = useNavigate();
  const User = ComponetAuthCheck(UserComponent, COMPONENT_CODE.USER);
  const Guest = ComponetAuthCheck(GuestComponent, COMPONENT_CODE.GUEST);
  const Admin = ComponetAuthCheck(AdminComponent, COMPONENT_CODE.ADMIN);
  const SuperAdmin = ComponetAuthCheck(
    SuperAdminComponent,
    COMPONENT_CODE.SUPER_ADMIN
  );
  return (
    <div className="d-flex flex-column mt-4">
      <div className="d-flex justify-content-center">
        <Button className="m-2" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </div>
      <br />
      <br />
      <h1>
        <center>Super-Admin panel</center>
      </h1>
      <hr />
      <div className="d-flex justify-content-center">
        <User />
        <Guest />
        <Admin />
        <SuperAdmin />
      </div>
    </div>
  );
};

export default AuthenticationCheck(SuperAdminPanel, PAGES_CODE.SUPER_ADMIN);
