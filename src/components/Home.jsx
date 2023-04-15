import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuthentication from "./customHooks/useAuthentication";

const Home = () => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mt-4">
      <div className="d-flex justify-content-center">
        <h1>
          <center>Home page</center>
        </h1>
        <Link to="/login" className="text-white">
          <Button className="m-2 ms-5">Go to Log-in page</Button>
        </Link>
        <Link to="/login" className="text-white">
          <Button
            className="m-2 ms-5"
            onClick={() => {
              handleLogout();
            }}
          >
            Log-out
          </Button>
        </Link>
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Button className="m-2" onClick={() => navigate("/profile")}>
          Profile
        </Button>
        <Button className="m-2" onClick={() => navigate("/admin-panel")}>
          Admin panel
        </Button>
        <Button className="m-2" onClick={() => navigate("/super-admin-panel")}>
          Super-Admin panel
        </Button>
      </div>
    </div>
  );
};

export default Home;
