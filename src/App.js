import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./Components/Signin";

import SignUp from "./Components/Sign Up";

import Home from "./Components/Home";

import ProductPage from "./Components/ProductPage";

import Cart from "./Components/Cart";

 

import { useState } from "react";

 

import EndPage from "./Components/EndPage";

import Order from "./Components/Order";

import PageNotFound from "./Components/PageNotFound";

 

function App() {

  const [cartitems, setCartitems] = useState([]);

  const [authtrue, setAuthTrue] = useState("");

  const [user, setUser] = useState();

  const [address, setAddress] = useState();

  const [totalprice, setTotalprice] = useState();

 

  const authHandler = (data) => {

    setAuthTrue(data);

  };

  const AddressUser = (data) => {

    setUser(data);

  };

  const Orderaddress = (data) => {

    setAddress(data);

  };

  const totalpriceHandler = (data) => {

    setTotalprice(data);

  };

 

  const AddProduct = (product) => {

    const exitproduct = cartitems.find((item) => item.id === product.id);

    if (exitproduct) {

      setCartitems(

        cartitems.map((item) =>

          item.id === product.id

            ? { ...exitproduct, qty: exitproduct.qty + 1 }

            : item

        )

      );

    } else {

      setCartitems([...cartitems, { ...product, qty: 1 }]);

    }

  };

  const RemoveProduct = (product) => {

    const exitproduct = cartitems.find((item) => item.id === product.id);

    if (exitproduct.qty === 1) {

      setCartitems(cartitems.filter((item) => item.id !== product.id));

    } else {

      setCartitems(

        cartitems.map((item) =>

          item.id === product.id

            ? { ...exitproduct, qty: exitproduct.qty - 1 }

            : item

        )

      );

    }

  };

  let carticonvalue = cartitems.length;

  // console.log(authtrue);

  return (

    <div>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route

            path="/signin"

            element={<Signin onsubmitAuth={authHandler} />}

          />

          <Route path="/signup" element={<SignUp />} />

          <Route

            path="/productpage"

            element={

              <ProductPage

                AddProduct={AddProduct}

                carticonvalue={carticonvalue}

              />

            }

          />

          <Route

            path="/cart"

            element={

              <Cart

                cartitems={cartitems}

                AddProduct={AddProduct}

                RemoveProduct={RemoveProduct}

                carticonvalue={carticonvalue}

                authHandler={authtrue}

                addressuser={AddressUser}

                addressfunction={Orderaddress}

                totalpriceAddress={totalpriceHandler}

              />

            }

          />

          <Route

            path="/order"

            element={

              <Order user={user} address={address} Totalprice={totalprice} />

            }

          />

          <Route path="/endpage" element={<EndPage />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

 

export default App;