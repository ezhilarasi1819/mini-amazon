import React from "react";

import "./Order.css";

import Welcomepage from "./Welcomepage";

const Order = (props) => {

  let index = 0;

  return (

    <div>

      <Welcomepage />

      <div className="main">

        <h1>Order Details</h1>

        <table className="table">

          <tr>

            <th>Order Id</th>

            <th>Username</th>

            <th>Product Price</th>

            <th>Status</th>

          </tr>

          <tr>

            <td>{(index = index + 1)}</td>

            <td>{props.user}</td>

            {/* <td>{props.address}</td> */}

            <td>{props.Totalprice}</td>

            <td className="text-warning">

              <b>Pending..</b>

            </td>

          </tr>

        </table>

      </div>

    </div>

  );

};

export default Order;

 