"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import PhotoSizes from "@/components/PhotoSizes";
import Gallery from "@/components/Gallery";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ResponsiveStyles from "@/components/ResponsiveStyles";

export default function Home() {
  return (
    <main>
      <ResponsiveStyles />
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Catalog />
      <PhotoSizes />
      <Gallery />
      <Testimonials />
      <HowToOrder />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
