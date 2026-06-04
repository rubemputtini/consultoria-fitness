import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Differentiator from './components/Differentiator';
import FeaturedTestimonials from './components/FeaturedTestimonials';
import HowItWorks from './components/HowItWorks';
import Deliverables from './components/Deliverables';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App = () => (
  <div className="bg-primary font-poppins overflow-hidden">
    <Navbar />
    <Hero />
    <Problem />
    <Differentiator />
    <FeaturedTestimonials />
    <HowItWorks />
    <Deliverables />
    <Author />
    <Testimonials />
    <Pricing />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default App;
