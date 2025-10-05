import React from 'react'

const BenefitsOffered = () => {
  return (
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
  )
}

export default BenefitsOffered
