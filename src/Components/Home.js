import React from "react";

import Welcomepage from "./Welcomepage";

import oneimg from "./slideshowpictures/slide show image 1.webp";

import twoimg from "./slideshowpictures/mobile.jpg";

import threeimg from "./slideshowpictures/drone.jpg";

import fourimg from "./slideshowpictures/apple.jpg";

function Home() {

  return (

    <div>

      <Welcomepage />

 

      <div id="slide" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">

          <button

            type="button"

            data-bs-target="#slide"

            data-bs-slide-to="0"

            className="active"

            aria-current="true"

            aria-label="slide 1"

          ></button>

          <button

            type="button"

            data-bs-target="#slide"

            data-bs-slide-to="1"

            aria-label="slide 2"

          ></button>

          <button

            type="button"

            data-bs-target="#slide"

            data-bs-slide-to="2"

            aria-label="slide 3"

          ></button>

          <button

            type="button"

            data-bs-target="#slide"

            data-bs-slide-to="3"

            aria-label="slide 4"

          ></button>

        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">

            <img

              src={oneimg}

              alt="slideshow img 1"

              className="d-block w-100"

              style={{ height: 562 }}

            />

            <div className="carousel-caption d-none d-md-block text-warning">

              <h1>Welcome to Mini Amazon</h1>

              <p>All Branded mobiles and DSLR Cameras are Available.</p>

            </div>

          </div>

          <div className="carousel-item">

            <img

              src={twoimg}

              alt="slideshow img 2"

              className="d-block w-100"

              style={{ height: 562 }}

            />

            <div className="carousel-caption d-none d-md-block text-warning">

              <h5>Cheap and Best Quality..</h5>

              <p>

                All Branded mobiles and DSLR Cameras are Available.All over

                India Delivery Avilable

              </p>

            </div>

          </div>

          <div className="carousel-item">

            <img

              src={threeimg}

              alt="slideshow img 3"

              className="d-block w-100"

              style={{ height: 562 }}

            />

            <div className="carousel-caption d-none d-md-block text-black">

              <h4>Lets start the Shopping!</h4>

            </div>

          </div>

          <div className="carousel-item">

            <img

              src={fourimg}

              alt="vitage camera"

              className="d-block w-100"

              style={{ height: 562 }}

            />

            <div className="carousel-caption d-none d-md-block">

              <h4>See it, Want It, Buy it Shop</h4>

            </div>

          </div>

        </div>

        <button

          className="carousel-control-prev"

          type="button"

          data-bs-target="#slide"

          data-bs-slide="prev"

        >

          <span

            className="carousel-control-prev-icon "

            aria-hidden="true"

          ></span>

          <span className="visually-hidden">Previous</span>

        </button>

        <button

          className="carousel-control-next"

          type="button"

          data-bs-target="#slide"

          data-bs-slide="next"

        >

          <span

            className="carousel-control-next-icon"

            aria-hidden="true"

          ></span>

          <span className="visually-hidden">Next</span>

        </button>

      </div>

    </div>

  );

}

export default Home;

 