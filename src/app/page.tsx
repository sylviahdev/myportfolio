import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
