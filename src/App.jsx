import BlackHero from "./Components/BlackHero";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import InstantReply from "./Components/InstantReply";
import Navbar from "./Components/Navbar";
import Plans from "./Components/Plans";
import PremiumHero from "./Components/PremiumHero";
import Subscribe from "./Components/Subscribe";
import SupportCards from "./Components/SupportCards";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="font-dmsans bg-base-100">
      <Navbar />
      <Hero/>
      <SupportCards/>
      <PremiumHero/>
      <InstantReply/>
      <BlackHero/>
      <Plans/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
