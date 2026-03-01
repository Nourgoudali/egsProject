import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import FounderStory from './components/sections/FounderStory';
import CompanyHistory from './components/sections/CompanyHistory';
import FarmAndProduction from './components/sections/FarmAndProduction';
import Products from './components/sections/Products';
import GalleryModern from './components/sections/GalleryModern';
import CommercialAgents from './components/sections/CommercialAgents';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        <FounderStory />
        <CompanyHistory />
        <Products />
        <FarmAndProduction />
        <WhyChooseUs />
        <GalleryModern />
        <CommercialAgents />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
