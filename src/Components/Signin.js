import axios from "axios";

import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import ReactModal from "react-modal";

import Welcomepage from "./Welcomepage";

import "./Order.css";

const Signin = (props) => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [second_password, setSecondPassword] = useState("");

  const [userdetails, setUserDetails] = useState([]);

  const [valueAuth, setValueAuth] = useState(false);

  const [open, setOpen] = useState(false);

  const formReset = useRef(null);

  //const navigate = useNavigate;

  useEffect(() => {

    GetUsers();

  }, []);

  const GetUsers = async () => {

    const result = await axios.get("http://localhost:8080/getting");

    setUserDetails(result.data);

  };

 

  const submitHandler = (e) => {

    e.preventDefault();

 

    userdetails.map((data) =>

      data.email === email &&

      data.password === password &&

      data.second_password === second_password

        ? setValueAuth(true) & setOpen(true)

        : ""

    );

    console.log(userdetails);

    formReset.current.reset();

  };

  const EmailHandler = (e) => {

    setEmail(e.target.value);

  };

  const PasswordHandler = (e) => {

    setPassword(e.target.value);

  };

  const ModalHandler = () => {

    props.onsubmitAuth(valueAuth);

    setOpen(false);

  };

  return (

    <>

      <Welcomepage />

      <form onSubmit={submitHandler} ref={formReset}>

        <div className="pt-3 mt-4 ">

          <div className=" container col-4 justify-content-center border rounded bg-dark">

            <div className="text-center mb-3 p-3 text-white">

              <h1>Sign In</h1>

            </div>

            <div className="form-outline my-1 px-5 rounded text-white">

              <label htmlFor="email" className="form-label ">

                <b> Email</b>

              </label>

              <input

                type="text"

                id="email"

                name="email"

                className="form-control"

                placeholder="Email ID"

                onChange={EmailHandler}

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

                name="password"

                className="form-control"

                placeholder="Password"

                onChange={PasswordHandler}

                required

              />

            </div>

            <div className="from-outline my-1 px-5 text-white">

              <label htmlFor="pass" className="form-label">

                <b>second password</b>

              </label>

              <input

                type="text"

                id="pass"

                name="password"

                className="form-control"

                placeholder="Password"

                onChange={(e) => {

                  setSecondPassword(e.target.value);

                }}

                required

              />

            </div>

 

            <div className="text-center my-4">

              <button

                type="submit"

                className="btn btn-warning btn-lg my-1  justify-content-center"

              >

                Sign In

              </button>

            </div>

            <div className="text-center my-4 text-white">

              <p>

                Not a member? <Link to="/signup">Sign Up Here</Link>

              </p>

            </div>

            <div className="text-center my-4 text-white">

              <p>

                Go to <Link to="/cart">Check Out Page</Link>

              </p>

            </div>

          </div>

        </div>

      </form>

      <ReactModal isOpen={open} className="Modal">

        <div className="text-center">

          <h1>Sign In Successfully!!</h1>

          <h4 className="text-center">

            <b>Hai! {email}</b>

          </h4>

          <button className="btn btn-warning " onClick={ModalHandler}>

            close modal

          </button>

        </div>

      </ReactModal>

    </>

  );

};

export default Signin;

 