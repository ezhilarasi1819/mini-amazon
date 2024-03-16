import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

 

import { RiAmazonFill } from "react-icons/ri";

import { FaShoppingCart } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";

import { CgProfile } from "react-icons/cg";

import { MdMail } from "react-icons/md";

import { ImTwitter } from "react-icons/im";

import { Link } from "react-router-dom";

 

const Welcomepage = ({ carticonvalue, userName, nameFunction }) => {

  // console.log(userName);

  // console.log(nameFunction);

  return (

    <div>

      <nav className="navbar navbar-expand-md p-2 bg-dark navbar-dark">

        <div className="container-fluid">

          <div className="navbar-brand">

            <RiAmazonFill size={42} />

            <h6>MINI AMAZON</h6>

          </div>

          <button

            className="navbar-toggler"

            type="button"

            data-bs-toggle="collapse"

            data-bs-target="#collapsibleNavbar"

          >

            <span className="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse " id="collapsibleNavbar">

            <ul className="navbar-nav nav ps-5">

              <li className=" active nav-item ">

                <Link to="/" className="nav-link text-white ps-5">

                  Home

                </Link>

              </li>

              <li className="nav-item">

                <Link to="/productpage" className="nav-link text-white ps-5">

                  Our Products

                </Link>

              </li>

              <li className="nav-item">

                <Link to="/signin" className=" nav-link text-white ps-5">

                  Sign in / Sign Up

                </Link>

              </li>

              <li className="nav-item">

                <Link to="/order" className=" nav-link text-white ps-5">

                  Orders

                </Link>

              </li>

            </ul>

          </div>

 

          {/* <div>

            {nameFunction === false ? (

              <span className="text-white ps-5">Hai {userName} !</span>

            ) : (

              ""

            )}

          </div> */}

          <ul className="navbar-nav nav text-white d-flex d-flex-row">

            <Link to="*" className="nav-link text-white">

              <li className="nav-item">

                <RiWhatsappFill

                  size={23}

                  style={{ margin: 2 }}

                  className="text-success"

                />

                <MdMail

                  size={23}

                  style={{ margin: 2 }}

                  className="text-danger"

                />

                <ImTwitter

                  size={23}

                  style={{ margin: 2, marginRight: "2rem" }}

                  className="text-primary"

                />

                <CgProfile

                  size={30}

                  style={{ margin: 2 }}

                  className="text-warning"

                />

                <span>Profile</span>

              </li>

            </Link>

            <Link to="/cart" className="text-white  navbar-brand">

              <FaShoppingCart size={30} className="text-warning" />

              <span>Cart</span>

              <span className="badge bg-primary text-dark p-1 rounded-pill">

                {carticonvalue}

              </span>

              {/* <h6 className="text-danger p-1">Cart</h6> */}

            </Link>

          </ul>

        </div>

      </nav>

    </div>

  );

};

export default Welcomepage;

 