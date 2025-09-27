import React from "react";
import tshirt1 from "../assets/thshirt1.jpeg";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";
import person4 from "../assets/person4.jpeg";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    image: person1,
    color: "Sand",
    price: "400",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    image: person2,
    color: "Sand",
    price: "400",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3.",
    image: person3,
    color: "Sand",
    price: "400",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for Product 4.",
    image: person4,
    color: "Sand",
    price: "400",
  },
];

const MyProduct = () => {
  return (
    <div className="px-4 sm:px-20 lg:px-32 py-32">
      {/* Title */}
      <div className="flex items-center gap-4 mb-12">
        <span className="flex-1 bg-primary h-0.5"></span>
        <h1 className="text-3xl font-bold">Page Title</h1>
        <span className="flex-1 bg-primary h-0.5"></span>
      </div>
      {/* Display Details of the Tshirt */}
      <div className="flex flex-col md:flex-row gap-20">
        {/* Display Image */}
        <div className="px-12">
          <img src={tshirt1} alt="Inner wear - vest" />
        </div>
        {/* Display Details and Contents */}
        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold">Color</h2>
              <p>Our Undershirt Matches Your Skin Tone And Appears Invisible</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Length</h2>
              <p>
                Long Undershirt Design Stays Tucked In To Eliminate Bunching
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold">Feel</h2>
              <p>Ultra Soft & Breathable Smooth, Better Feel Than Cotton</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Fit</h2>
              <p>
                Stretch Fit Without Compression Creating The Best Undershirt Fit
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold">V-Neck</h2>
              <p>Perfect Depth & Width For A V-Neck Men's Undershirt</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Sleeves</h2>
              <p>No Ride-Up Design </p>
            </div>
          </div>
          <button className="w-fit bg-transparent px-12 py-3 border-2 cursor-pointer hover:bg-primary hover:text-white border-primary text-primary ">
            SHOP
          </button>
        </div>
      </div>
      {/* Display All Items */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {products.map((item, index) => (
          <div key={index} className="relative cursor-pointer group">
            <img src={item.image} alt="Evoc Product" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 text-white transition">
            <div className=" bg-white/80 flex items-center justify-center w-full h-full">
                <button className="w-fit text-primary px-8 py-2 border border-primary hover:bg-primary hover:text-white cursor-pointer">SHOP</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
