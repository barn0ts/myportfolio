"use client"
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion'
import { fadeIn } from './variants';

interface Me {
  backgroundImage: string;
}

interface Description {
  description: string;
  title: string;
  subtitle: string;
}

const AboutMe = ({ backgroundImage }: Me) => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
    className={`hidden lg:block h-full w-full min-w-[550px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}/>
  )
}
const DescriptionOfMe = ({ description, title, subtitle }: Description) => {
  return (
    <div 
    className={"flex sm:flex-col xs:flex-col lg:flex-row mt-16 px-1 min-w-[550px]"}>
      <motion.div 
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        style={{background: "#2b2828", borderWidth: '4px', borderColor: 'white'}}
        className="p-1 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-1xl xl:px-16 xl:py-16 sm:px-10 xs:px-10 xs:py-10 sm:py-10 relative w-full overflow-hidden rounded-3xl">
        <h2
          style={{wordSpacing: "5px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "clamp(10px, 3vw, 32px)"}}
          className="capitalize text-[#ffffff] font-brittany text-center ">
          <strong>{title}</strong>
        </h2>
        <p 
          style={{fontSize: "clamp(10px, 2vw, 20px)"}}
          className="text-[#eeead7] mt-4 text-justify">{subtitle}</p>
        <Image 
          src="/quote.svg"
          alt="camp-quote"
          width={186}
          height={219}
          className="camp-quote"
        />
      </motion.div>
    </div>
  );
};

const ThisIsMe = () => {
  return (
    <section id="aboutme" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div
      className="hide-scrollbar flex h-[450px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[640px]">
        <AboutMe 
          backgroundImage="bg-bg-img-2"
        />
        <DescriptionOfMe 
          description="bg-bg-img-2"
          title="Who I am as a Creator"
          subtitle="I specialize in crafting intuitive and visually appealing web applications 
                    with a strong emphasis on user experience. My passion lies in blending 
                    creativity and functionality to design interfaces that are not only beautiful 
                    but also user-friendly. I enjoy refining my skills 
                    in UI/UX design, and bringing ideas to life through code. 
                    I love collaborating with others to solve challenges and create meaningful 
                    digital experiences."
        />
        <AboutMe 
          backgroundImage="bg-bg-img-1"
        />
        <DescriptionOfMe 
          description="bg-bg-img-1"
          title="Random Facts About Me"
          subtitle="I’m a dog lover through and through. I have two wonderful dogs who never fail to 
                    brighten my day. Music is my constant companion, 
                    and I’m especially drawn to R&B and pop. I also have a deep appreciation for nature.
                    It’s my way of finding peace amidst life’s chaos. Another thing I love is spending 
                    quality time with my friends. Engaging in deep conversations and being in their company helps me recharge and feel connected."
        />
      </div>
    </section>
  )
}

export default ThisIsMe