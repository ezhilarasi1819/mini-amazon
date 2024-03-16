import React from "react";

import Welcomepage from "./Welcomepage";

import "./ProductPage.css";

//import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = (props) => {

  const { AddProduct, carticonvalue } = props;

  const items = [

    {

      id: 1,

      imagedata: "./images/moto.jpg",

      name: "Moto Android 10.0",

      description:

        "Firzero 2022 New Unlocked Smartphone, Android 10.0 Unlocked Cell Phones 2+16GB 6.3 Inch Mobile Cell Phone HD Camera Touch Screen Dual SIM Cellphone 5G Smart Phone for Father Childrens Gift (Black)",

      price: 11659,

    },

    {

      id: 2,

      imagedata: "./images/vivo.jpg",

      name: "Vivo Smartphone",

      description:

        "Vivo 2022 New Unlocked Smartphone, Android 10.0 Unlocked Cell Phones 2+16GB 6.3 Inch Mobile Cell Phone HD Camera Touch Screen Dual SIM Cellphone 5G Smart Phone for Father Childrens Gift (Black)",

      price: 11659,

    },

    {

      id: 4,

      imagedata: "./images/samsung,jpg",

      name: "Samsung S22 Ultra",

      description:

        "Smart Phone,Android 8.1 Smartphone HD Full Screen Phone,Dual SIM Unlocked Smart Phone,1GB RAM+8GB ROM,6.3 Inch Cellphones Mobile Phones",

      price: 100234,

    },

    {

      id: 3,

      imagedata: "./images/nikon d5600.jpg",

      name: "Nikon D5600",

      description:

        "Nikon D5600 DSLR Camera Body with Dual Lens: AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G VR and 70-300 MM F/4.5-6.3G ED VR (16 GB SD Card)(Black)",

      price: 65990,

    },

 

    {

      id: 5,

      imagedata: "./images/sony.jpg",

      name: "Sony Digital Vlog Camera ZV 1 ",

      description:

        "ony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black",

      price: 69990,

    },

    {

      id: 6,

      imagedata: "./images/iphone.jpg",

      name: "iPhone 12",

      description:

        "6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance Supports MagSafe accessories for easy attach and faster wireless charging iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",

      price: 58000,

    },

    {

      id: 7,

      imagedata: "./images/canon.jpg",

      name: "Canon EOS 3000D",

      description:

        "18-megapixel APS-C-size CMOS sensor and DIGIC 4+ image processor 9-point AF with 1 centre cross-type AF point Standard ISO 100 - 6400 (expandable to 12800) Wi-Fi supported 18.0 megapixels Canon EF lenses (including EF-S lenses) compaitable. CMOS sensor Recording format : Design rule for Camera File System (DCF) 2.0 JPEG, RAW (14-bit Canon original) Auto Lighting Optimizer Flash color temperature information transmission enabled 9-point AF with 1 centre cross-type AF point Wi-Fi supported",

      price: 34000,

    },

    {

      id: 8,

      imagedata: "./images/samsung.jpg",

      name: "Samsung Galaxy",

      description:

        "Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen and no black dot getting between you and the breathtaking Infinity Flex Display.Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket transforms apps optimized with One UI to give you menus and more in a glance",

      price: 158000,

    },

    {

      id: 9,

      imagedata: "./images/fujifilm t200.jpg",

      name: "Fujifilm X-T200",

      description:

        "Fujifilm X-T200 24.2 MP Mirrorless Camera with XC 15-45 mm Lens (APS-C Sensor, Electronic Viewfinder, 8.89 cm 3.5 Vari-Angle Touchscreen, Face/Eye AF, 4K Video Vlogging, Film Simulations) - Champagne Gold",

      price: 67000,

    },

    {

      id: 10,

      imagedata: "./images/pixel.jpg",

      name: "Google Pixel 6 5G Smartphone",

      description:

        "Meet Pixel 6, the Google 5G cell phone that’s completely reimagined, inside and out.[1] Powered by the custom Google Tensor processor, it’s fast, smart, and secure. And it adapts to you. And it’s an unlocked Android smartphone, so you can choose the data plan and carrier that work for you.[1] [1] Works with all major carriers. Contact carrier for details. 5G service is carrier dependent. Requires a 5G data plan (sold separately). 5G service not available on all carrier networks or in all areas. Contact carrier for details. 5G service, speed and performance depend on many factors, including carrier network capabilities and signal strength. Actual results may vary. Some features not available in all areas. Data rates may apply. See g.co/pixel/networkinfo for info. [2] Compared to main rear camera on Pixel 5. [3] Magic Eraser may not work on all image elements",

      price: 45000,

    },


  ];

 

  return (

    <div>

      <Welcomepage carticonvalue={carticonvalue} />

      <div className="container-fluid">

        <div className="row bg-dark text-white col-expand-sm">

          <h1 className="text-center text-warning">Product Lists</h1>

          {items.map((item) => {

            const { id, imagedata, name, price } = item;

            return (

              <>

                <div

                  className="col-3 rounded p-4 mt-5 m-4 ms-5 col-expand-sm col-expand-md "

                  key={id}

                  style={{ height: 450 }}

                >

                  <div className="img-responsive ProductImageCss img-thumbnail">

                    {/* <div className="hover-content">

                      <MdOutlineAddShoppingCart />

                    </div> */}

                    <img

                      src={imagedata}

                      alt={name}

                      className="img-fluid rounded display-block "

                      style={{ width: 350, height: 300 }}

                    />

                  </div>

                  <div className="pt-2" style={{ width: 350, height: 250 }}>

                    <p>{name}</p>

 

                    {/* <p>

                    <span>Description : </span>

                    {description}

                  </p> */}

                    <h5>Rs.{price}</h5>

                    <button

                      className="btn btn-warning   text-black btnhover"

                      type="button"

                      onClick={() => AddProduct(item)}

                    >

                      Add to Cart

                    </button>

                  </div>

                </div>

              </>

            );

          })}

        </div>

      </div>

    </div>

  );

};

export default Product;

 