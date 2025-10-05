import React from "react";
import tshirt1 from "../../assets/thshirt1.jpeg";

import { useNavigate } from "react-router-dom";
import { products } from "../../assets/products";



const MyProduct = () => {
    const navigate = useNavigate()
    console.log(products.varients);
    
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
       <div>
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
      </div>
      {/* Display All Items */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {products.varients.slice(1,5).map((item, index) => (
          <div key={index} onClick={() => navigate(`/products/${encodeURIComponent(item.color)}`)} 
          className="relative cursor-pointer group">
            <img src={item.images[0]} alt="Evoc Product" />
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
