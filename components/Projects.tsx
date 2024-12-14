"use client"
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { fadeIn } from './variants';

interface Me {
  backgroundImage: string;
}

interface Description {
  description: string;
  title: string;
  subtitle: string;
  link: string;
}

const DescriptionOfMe = ({ description, title, subtitle, link }: Description) => {
  return (
    <div className={"flex sm:flex-col xs:flex-col lg:flex-row px-5 min-w-[550px]"}>
      <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      style={{background: "#575554", borderRadius:'20px', borderWidth: '4px', borderColor: 'white', width: '500px'}}
      className="lg:mt-[120px] mt-[30px]">
      <div className="flex px-10 py-10 text-left">
          <div className="flex flex-col w-[100%]">
          <Link href={link}>
            <button
              style={{borderRadius: '50px', transition: "transform 0.3s ease"}} 
              className="text-white hover:bg-opacity-90 transition-all ml-2 text-left hover:scale-105">
            <h2
              style={{
                wordSpacing: "5px",
                fontSize: "clamp(10px, 3vw, 24px)"
              }}
              className="capitalize text-[#ffffff]">
              <strong>{title}</strong>
              <ArrowForwardIcon/>
            </h2>
            <p 
              style={{
                fontSize: "clamp(10px, 2vw, 18px)",
              }}
              className="text-[#ffffff]">{subtitle}</p>
            </button>
            </Link>
          </div>
        </div>

      <div 
        style={{
          backgroundImage: `url(${description})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
        className="p-1 lg:max-w-[400px] xl:max-w-[634px] xl:rounded-1xl xl:px-16 xl:py-16 sm:px-10 xs:px-10 mt-[-20px] relative w-full overflow-hidden rounded-3xl min-h-[200px]">
        
      </div>
    </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="2xl:max-container relative flex flex-col px-10 py-10 lg:mb-10 lg:py-5 xl:mb-20 mt-24">
      <div className="hide-scrollbar flex h-[450px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[600px]">
      <h1
            style={{
              position: "absolute",
              fontSize: "clamp(15px, 5vw, 60px)",
              color: "#fbfcfe",
              zIndex: 10,
              top: "5%",
              textAlign: "center",
              width: "100%",
              fontWeight: "500",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"
            }}
            className="font-brittany mt-[-20px]"
          >
            My Projects
          </h1>
        <DescriptionOfMe 
          description="/13.png"
          title="Atlas"
          subtitle="A Streamlined Balanced Scorecard"
          link="/atlasproject"
        />
        <DescriptionOfMe 
          description="/14.png"
          title="Barangay Connect"
          subtitle="Bringing Communities Together"
          link="/bconnectproject"
        />
        <DescriptionOfMe 
          description="/11.png"
          title="Sweet Rush"
          subtitle="Savor the Joy, Feel the Rush"
          link="/sweetrushproject"
        />
        <DescriptionOfMe 
          description="/12.png"
          title="iCare"
          subtitle="Your Partner in Health"
          link="/icareproject"
        />
      </div>
    </section>
  )
}

export default Projects