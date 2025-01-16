// import { Navigation } from './components/Navigation';
import { Header } from './components/Header/Header';
import { About } from './components/About';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#E5D5C5]">
      {/* <Navigation /> */}
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;