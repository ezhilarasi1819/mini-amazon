import React, { useRef, useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Welcomepage from "./Welcomepage";

 

const SignUp = (props) => {

  // const [username, setUsername] = useState("");

  // const [email, setEmail] = useState("");

  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [details, setDetails] = useState({

    username: "0",

    email: "0",

    password: "0",

    second_password: "0",

  });

 

  const formreset = useRef(null);

 

  const valueHandler = (e) => {

    const { name, value } = e.target;

    setDetails((prev) => {

      return { ...prev, [name]: value };

    });

  };

  console.log(details);

  const submitHandler = async (event) => {

    event.preventDefault();

 

    await axios.post("http://localhost:8080/add, details");

    formreset.current.reset();

    navigate("/signin");

  };

 

  return (

    <>

      <Welcomepage />

      <form ref={formreset} onSubmit={submitHandler}>

        <div className="pt-3 mt-4 ">

          <div className=" container col-4 justify-content-center border  border-dark rounded bg-dark">

            <div className="text-center  p-4 text-white">

              <h1>Sign Up</h1>

            </div>

            <div className="form-outline my-1 px-5 rounded text-white">

              <label htmlFor="user" className="form-label ">

                <b> UserName</b>

              </label>

              <input

                type="text"

                id="user"

                name="username"

                className="form-control"

                placeholder="Enter UserName"

                // value={username}

                // onChange={(e) => {

                //   setUsername(e.target.value);

                // }}

                onChange={valueHandler}

                required

              />

            </div>

            <div className="from-outline my-1 px-5 text-white">

              <label htmlFor="email" className="form-label">

                <b>Email</b>

              </label>

              <input

                type="text"

                id="email"

                className="form-control"

                placeholder="Enter Email"

                name="email"

                // value={email}

                // onChange={(e) => {

                //   setEmail(e.target.value);

                // }}

                onChange={valueHandler}

                required

              />

            </div>

            <div className="from-outline my-1 px-5 text-white">

              <label htmlFor="pass" className="form-label">

                <b>Password</b>

              </label>

              <input

                type="text"

                id="pass"

                className="form-control"

                placeholder="Enter Password"

                name="password"

                // value={password}

                // onChange={(e) => {

                //   setPassword(e.target.value);

                // }}

                onChange={valueHandler}

                required

              />

            </div>

            <div className="from-outline my-1 px-5 text-white">

              <label htmlFor="pass" className="form-label">

                <b>Second Password</b>

              </label>

              <input

                type="text"

                id="pass"

                className="form-control"

                placeholder="Enter Second Password"

                name="second_password"

                // value={password}

                // onChange={(e) => {

                //   setPassword(e.target.value);

                // }}

                onChange={valueHandler}

                required

              />

            </div>

            <div className="text-center my-4 mb-1">

              <button

                type="submit"

                className="btn btn-warning btn-lg my-1 justify-content-center"

              >

                Sign Up

              </button>

            </div>

            <div className="text-center my-4 text-white">

              <p>

                If already Sign Up? <Link to="/signin">Sign In Here</Link>

              </p>

            </div>

          </div>

        </div>

      </form>

    </>

  );

};

export default SignUp;

 