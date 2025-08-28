import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import CoreValues from '@/components/CoreValues/CoreValues';
import Products from '@/components/Products/Products';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Products />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
