import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrPage = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mt-4">
      <h1><center>Error-404</center></h1>
      <h4><center>No page found !!!</center></h4>
      <div className="d-flex justify-content-center">
        <Button className="m-2" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default ErrPage;
