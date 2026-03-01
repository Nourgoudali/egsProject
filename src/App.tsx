import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ProductionProcess from './components/sections/ProductionProcess';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <ProductionProcess />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
