import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/about.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}