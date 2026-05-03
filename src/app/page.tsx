import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section className="border-t border-white/5">
          <About />
        </section>
        <section className="border-t border-white/5">
          <Projects />
        </section>
        <section className="border-t border-white/5">
          <Skills />
        </section>
        <section className="border-t border-white/5">
          <Contact />
        </section>
      </main>
    </div>
  );
}
