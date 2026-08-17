"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import PhotoSizes from "@/components/PhotoSizes";
import Gallery from "@/components/Gallery";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";
import ResponsiveStyles from "@/components/ResponsiveStyles";

export default function Home() {
  return (
    <main>
      <ResponsiveStyles />
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <PhotoSizes />
      <Gallery />
      <HowToOrder />
      <Footer />
    </main>
  );
}
