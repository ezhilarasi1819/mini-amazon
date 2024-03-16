import React from "react";

import { useNavigate } from "react-router";

import "./endpage.css";

const EndPage = () => {

  const navigate = useNavigate();

  return (

    <div className="main">

      <h1>THANK YOU FOR SHOPPING US!</h1>

      <span className="span">

        Back to Home,

        <button onClick={() => navigate("/")} className="btn">

          <b>Click Here</b>

        </button>

      </span>

    </div>

  );

};

 

export default EndPage;

 