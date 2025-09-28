import React from 'react'
import Hero from './Hero.jsx'
import MyProduct from './MyProduct.jsx'
import Navbar from "../Common/Navbar.jsx";
import Footer from "../Common/Footer.jsx";

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <MyProduct />
        <Footer />
    </div>
  )
}

export default Homepage
