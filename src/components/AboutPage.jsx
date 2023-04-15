import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
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
        <center>About Page</center>
      </h1>
    </div>
  );
};

export default AboutPage;