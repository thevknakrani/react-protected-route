import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorise = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mt-4">
      <h1>
        <center>Unauthorise</center>
      </h1>
      <h4>
        <center>You can't access to this page !!!</center>
      </h4>
      <div className="d-flex justify-content-center">
        <Button className="m-2" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default Unauthorise;
