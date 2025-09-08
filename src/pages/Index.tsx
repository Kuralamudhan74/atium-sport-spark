import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUsPage from "@/components/AboutUsPage";
import CoverflowSlider from "@/components/CoverflowSlider"
import BasketballScene from "@/components/BasketballScene"
import MeetAssistants from "@/components/MeetAssistants"
import ScrollingGallery from "@/components/ScrollingGallery"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <AboutUsPage /> */}
        <CoverflowSlider />
        <ScrollingGallery />
        {/* <MeetAssistants /> */}
        {/* <BasketballScene />(having some error) */} 
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
