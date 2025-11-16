import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <header className="p-4 flex items-center justify-between">
        <div className="text-xl font-bold">VLV ASSOCIATES</div>
        <div className="flex items-center gap-3">
          <a href="tel:+91XXXXXXXXXX" className="btn-primary">Call Now</a>
          <button className="btn-ghost" onClick={()=>document.getElementById('lead-form')?.scrollIntoView({behavior:'smooth'})}>Request Service</button>
        </div>
      </header>

      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-4">
          <Services />
          <Trust />
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}
