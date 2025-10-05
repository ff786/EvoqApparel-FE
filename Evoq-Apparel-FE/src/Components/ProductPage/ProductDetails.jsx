import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../assets/products";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import BenefitsOffered from "../BenefitsOffered";

const ProductDetails = () => {
  const { color } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const currentVariant = products.varients.find(
    (variant) =>
      variant.color.toLowerCase() === decodeURIComponent(color).toLowerCase()
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    currentVariant.sizes.find((s) => s.available)?.size || ""
  );

  if (!currentVariant) {
    return (
      <p className="text-center text-red-500 mt-20 text-lg">
        Product variant not found.
      </p>
    );
  }

  const handleToneChange = (e) => {
    const selectedColor = e.target.value;
    navigate(`/products/${encodeURIComponent(selectedColor)}`);
  };

  return (
    <div className="p-4 sm:p-12 md:p-16 lg:p-20">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-20 ">
        {/* ---------- Left Side (Thumbnails + Main Image) ---------- */}
        <div className="flex flex-col-reverse sm:flex-row items-start gap-4 flex-1">
          {/* Thumbnails */}
          <div className="flex flex-row sm:flex-col gap-3 overflow-auto">
            {currentVariant.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-16 h-16 sm:w-24 sm:h-24 object-cover cursor-pointer border-2 rounded-lg 
                ${
                  selectedImageIndex === index
                    ? "border-primary p-1"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center">
            <img
              src={currentVariant.images[selectedImageIndex]}
              alt={currentVariant.name}
              className=" rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* ---------- Product Details ---------- */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">
            {currentVariant.name}
          </h2>
          <p className="text-primary/80 mb-4">{currentVariant.description}</p>

          <p className="text-xl font-bold mb-6">
            Price: Rs. {currentVariant.price}
          </p>

          {/* ---------- Select Tone (Color) ---------- */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">Select Tone</label>
            <select
              value={currentVariant.color}
              onChange={handleToneChange}
              className="w-fit px-8 py-2 rounded-lg border border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            >
              {products.varients.map((v, index) => (
                <option key={index} value={v.color}>
                  {v.color}
                </option>
              ))}
            </select>
          </div>

          {/* ---------- Select Size ---------- */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">Select Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-fit px-8 py-2 rounded-lg border border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            >
              {currentVariant.sizes.map(
                (item, index) =>
                  item.available && (
                    <option key={index} value={item.size}>
                      {item.size}
                    </option>
                  )
              )}
            </select>
          </div>

          {/* ---------- Neck Type ---------- */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">Select Neck Type</label>
            <select className="w-fit px-8 py-2 rounded-lg border border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              {currentVariant.neckTypes.map(
                (item, index) =>
                  item.available && (
                    <option key={index} value={item.type}>
                      {item.type}
                    </option>
                  )
              )}
            </select>
          </div>

          {/* --------- Quantity -------------- */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="p-2 border rounded-lg hover:bg-primary hover:text-white ease-in-out"
              >
                <Minus />
              </button>

              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 text-center px-2 py-2 rounded-lg border border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />

              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="p-2 border rounded-lg hover:bg-primary hover:text-white ease-in-out "
              >
                <Plus />
              </button>
            </div>
          </div>

          {/* ---------- Add to Cart ---------- */}
          <button className="bg-primary text-white px-10 py-3 rounded-lg hover:bg-primary/90 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Benefits Offered */}
      <div className="my-12 sm:my-16 lg:my-20 px-0 sm:px-8 md:px-12 lg:px-20">
       {/* Title */}
       <div className="flex items-center gap-4 mb-12">
        <span className="flex-1 bg-primary h-0.5"></span>
        <h1 className="text-3xl font-bold">The Benefits Offered</h1>
        <span className="flex-1 bg-primary h-0.5"></span>
      </div>
        <BenefitsOffered />
      </div>
    </div>
  );
};

export default ProductDetails;
