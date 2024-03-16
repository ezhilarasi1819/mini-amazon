import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";

import Welcomepage from "./Welcomepage";

import ReactModal from "react-modal";

import "./ProductPage.css";

const Cart = (props) => {

  const { cartitems, AddProduct, RemoveProduct, carticonvalue, authHandler } =

    props;

 

  const totalprice = cartitems.reduce((a, c) => a + c.price * c.qty, 0);

 

  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [cardopen, setCardOpen] = useState(false);

  const formreset = useRef(null);

  const [user, setUser] = useState("");

  const [address, setAddress] = useState("");

 

  const finalHandler = () => {

    authHandler === true ? setOpen(true) : navigate("/signin");

  };

 

  const ModalOneSubmitHandler = (e) => {

    e.preventDefault();

 

    formreset.current.reset();

  };

  props.addressuser(user);

  props.addressfunction(address);

  props.totalpriceAddress(totalprice);

  return (

    <div>

      <Welcomepage carticonvalue={carticonvalue} namefunction={authHandler} />

 

      <div className="bg-dark text-white col-3-sm">

        <h1 className="text-center p-4 text-warning">Cart Items</h1>

        <div>

          {cartitems.length === 0 && (

            <div className="text-center bg-danger p-3 mt-5">

              <h2>Cart Items Empty....</h2>

            </div>

          )}

        </div>

        <table className="border mx-auto ps-5">

          {cartitems.map((item) => (

            <div key={item.id}>

              <tbody>

                <tr>

                  <td>

                    <img

                      src={item.imagedata}

                      alt="imagedatas"

                      className="img-responsive m-3 "

                      width="250rem"

                      height="250rem"

                    />

                  </td>

                  <td className="mx-auto px-5">

                    <h5>{item.name}</h5>

                    <button

                      className=" btn btn-success me-2"

                      onClick={() => AddProduct(item)}

                    >

                      +

                    </button>

                    <button

                      className=" btn btn-primary"

                      onClick={() => RemoveProduct(item)}

                    >

                      -

                    </button>

                    <br />

                    <b>

                      Qnantity & Price : {item.qty} × Rs.

                      {item.price.toFixed(2)}

                    </b>

                  </td>

                </tr>

              </tbody>

            </div>

          ))}

        </table>

        <div>

          {cartitems.length !== 0 && (

            <div className="pt-4 text-center">

              <h1>Total price</h1>

              <h2 className="text-danger">Rs.{totalprice}</h2>

              <button

                className="bg-warning p-1 px-3 rounded"

                onClick={finalHandler}

              >

                <b>Check Out</b>

              </button>

            </div>

          )}

        </div>

        <ReactModal isOpen={open}>

          <form

            className="h-100 w-60 pt-3 "

            onSubmit={ModalOneSubmitHandler}

            ref={formreset}

          >

            <div className="">

              <div className=" container col justify-content-center border rounded bg-dark">

                <div className="text-white text-center py-3 pt-4">

                  <h1>Address Details</h1>

                </div>

                <div className="form-outline my-1 px-5 rounded text-white">

                  <label htmlFor="user" className="form-label ">

                    <b> Username</b>

                  </label>

                  <input

                    type="text"

                    id="user"

                    name="username"

                    className="form-control"

                    placeholder="Username"

                    onChange={(e) => setUser(e.target.value)}

                    required

                  />

                </div>

                <div className="form-outline my-1 px-5 text-white">

                  <label htmlFor="address" className="form-label">

                    <b>Address</b>

                  </label>

                  <textarea

                    type="text"

                    id="address"

                    name="address"

                    className="form-control"

                    rows="8"

                    cols="10"

                    placeholder="Enter your Address"

                    onChange={(e) => setAddress(e.target.value)}

                    required

                  />

                </div>

 

                <div className="text-center my-4 ">

                  <button

                    type="submit"

                    className="btn btn-danger btn-lg my-1 mx-3  justify-content-center"

                    onClick={() => setOpen(false)}

                  >

                    Cancel

                  </button>

                  <button

                    type="cancel"

                    className="btn btn-success btn-lg my-1 mx-3 justify-content-center"

                    onClick={() => setCardOpen(true)}

                  >

                    Continue

                  </button>

                </div>

              </div>

            </div>

          </form>

        </ReactModal>

        <ReactModal isOpen={cardopen}>

          <form

            className="text-align-center form-inline"

            style={{

              justifyContent: "center",

              paddingLeft: 200,

              paddingRight: 200,

            }}

          >

            <div>

              <div className=" container col justify-content-center border rounded ">

                <div className="text-center pt-2">

                  <h1>Payment Details</h1>

                </div>

                <div className="form-outline pt-3 ps-4">

                  <input type="checkbox" />

                  <span>

                    {" "}

                    <b>Cash On Delivery</b>

                  </span>

                </div>

                <div className="form-outline my-1 px-5 rounded ">

                  <div className=" py-2 ">

                    <h4 className="text-center">Card Details</h4>

 

                    <label htmlFor="user" className="form-label pt-1">

                      <b> Card Holder Name</b>

                    </label>

                    <input

                      type="text"

                      id="user"

                      name="username"

                      className="form-control"

                      placeholder="Username"

                      required

                    />

                    <label htmlFor="number" className="form-label pt-1">

                      <b> Card Holder Number</b>

                    </label>

                    <input

                      type="number"

                      id="number"

                      name="number"

                      className="form-control"

                      placeholder="Enter Card Number"

                      required

                    />

                    <label htmlFor="date" className="form-label pt-1">

                      <b> Expiration Date</b>

                    </label>

                    <input

                      type="month"

                      id="date"

                      name="date"

                      className="form-control"

                      required

                    />

                    <label

                      htmlFor="cvv"

                      className="form-label pt-1"

                      maxLength="3"

                    >

                      <b> CVV </b>

                    </label>

                    <input

                      type="number"

                      id="cvv"

                      name="cvv"

                      className="form-control"

                      required

                    />

                  </div>

                </div>

                <div className="text-center my-3 ">

                  <button

                    type="submit"

                    className="btn btn-primary btn-lg my-1 mx-3 justify-content-center"

                    onClick={() => navigate("/endpage")}

                  >

                    Place Your Order

                  </button>

                </div>

              </div>

            </div>

          </form>

        </ReactModal>

      </div>

    </div>

  );

};

export default Cart;