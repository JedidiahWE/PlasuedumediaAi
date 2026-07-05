import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Features from "../../components/Features/features";
import Services from "../../components/Services/Services";
import Stats from "../../components/Stats/Stats";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
