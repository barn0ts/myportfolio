import ThisIsMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Image from "next/image"; 
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';

// Dynamically import StarBackground with no SSR
const StarBackground = dynamic(() => import('@/components/StarBackground'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <StarBackground />
      <Hero />
      <Skills />
      <ThisIsMe />
      <Projects />
      <Footer/>
    </>
  )
}