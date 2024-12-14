import ThisIsMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Image from "next/image"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ThisIsMe />
      <Skills />
      <Projects />
      <Footer/>
    </>
  )
}
