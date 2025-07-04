import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Works from "../components/Works";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import "../public/asset/css/global.css";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
        <Hero />
      </div>
      <Logos />
      <div id="work">
        <Works />
      </div>
      <div id="client">
        <Testimonials />
      </div>

      <div id="writing">
        <BlogSection />
      </div>
      <Footer />
    </>
  );
}
