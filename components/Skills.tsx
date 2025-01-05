"use client"
import Image from 'next/image'
import Button from './Button'
import styles from './Skills.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from './variants';
import Typewriter from "typewriter-effect";
import { useState } from 'react';

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('technical'); 
  
  const skills = [
    { title: "Front-end Development", subtitle: "Skilled in UI/UX design and wireframing to create user-friendly interfaces." },
    { title: "Programming Languages", subtitle: "Proficient in C, Java, Python, HTML, and CSS." },
    { title: "Design Tools Proficiency", subtitle: "Experienced in using Canva and Figma." },
    { title: "Creativity", subtitle: "Strong ability to think outside the box" },
    { title: "Prioritization", subtitle: "Able to efficiently organize tasks" },
    { title: "Time Management", subtitle: "Skilled in managing multiple tasks and projects efficiently" },
  ];

  const typingAnimation = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 2, 
        ease: "easeInOut",
      },
    },
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NAV_LINKS = [
    { href: '#aboutme', key: 'aboutme', label: 'About Me' },
    { href: '#projects', key: 'projects', label: 'Projects' },
  ];

  return (
    <section id="myskills" className="max-container padding-container flex flex-col md:gap-28 lg:py-20 xl:flex-row mt-16">
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: 0,
          width: "auto", 
          height: "auto",
          zIndex: -1, 
          transform: "rotate(-15deg)"
        }}
      >
        <Image
          src="/cloversolid.png" 
          alt="Background Image1"
          layout="intrinsic" 
          width= "300"
          height= "100"
          style={{
            right: 0,
            transform: "rotate(-35deg)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "32%",
          left: 0,
          width: "auto", 
          height: "auto",
          zIndex: -1, 
          transform: "rotate(-15deg)"
        }}
      >
        <Image
          src="/cloversolid.png" 
          alt="Background Image1"
          layout="intrinsic" 
          width= "300"
          height= "100"
          style={{
            right: 0,
            transform: "rotate(65deg) scaleX(-1)",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "30px",
          position: "relative",
        }}
        className='lg:mt-[-110px]'
      >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            className="font-brittany"
          >
            My Skills
          </h1>
          
          <div 
            className={"flex sm:flex-col xs:flex-col lg:flex-row mt-40 px-1 min-w-[850px] text-[18px] sm:justify-center sm:items-center"}>
            <div 
              style={{
                background: isDarkMode ? "#2b2828" : "#575554",
                borderWidth: '4px',
                borderColor: 'white',
                color: isDarkMode ? '#ffffff' : '#2b2828',
                transition: 'all 0.3s ease'
              }}
              className="p-1 lg:max-w-[800px] xl:max-w-[1000px] sm:max-w-[500px] xl:rounded-1xl xl:px-16 xl:py-16 sm:px-10 xs:px-10 xs:py-10 sm:py-10 relative w-full overflow-hidden rounded-3xl">
              
              {/* Navigation Bar */}
              <div 
                className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4"
                style={{
                  borderBottom: '2px solid',
                  borderColor: isDarkMode ? 'white' : 'white',
                }}
              >
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab('technical')}
                    style={{
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, filter 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(0.9)';
                      e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'none';
                    }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === 'technical' 
                        ? 'bg-white text-black' 
                        : isDarkMode 
                          ? 'bg-transparent text-white' 
                          : 'bg-transparent text-white'
                    }`}
                  >
                    Technical
                  </button>
                  <button
                    onClick={() => setActiveTab('soft')}
                    style={{
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, filter 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(0.9)';
                      e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'none';
                    }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === 'soft' 
                        ? 'bg-white text-black' 
                        : isDarkMode 
                          ? 'bg-transparent text-white' 
                          : 'bg-transparent text-white'
                    }`}
                  >
                    Soft
                  </button>
                </div>
                
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full"
                  style={{
                    background: isDarkMode ? '#ffffff' : '#2b2828',
                    color: isDarkMode ? '#2b2828' : '#ffffff',
                    border: '2px solid',
                    borderColor: isDarkMode ? '#2b2828' : '#ffffff',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(0.9)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'none';
                  }}
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
              </div>

              {/* Content based on active tab */}
              <div className="mt-20 px-6 justify-center text-center items-center text-white">
              {activeTab === 'technical' ? (
                <div className="flex flex-col items-center">
                <div className="mb-4">
                  Hi! I am Genevieve Miao
                </div>
                <div className='flex flex-row gap-2 text-[1rem] lg:text-[4rem] font-bold mb-8'>
                <div>
                  I
                </div>
                <div>
                  <Typewriter
                    options={{
                      strings: [
                        'am a Coder',
                        'am a Designer',
                        'am a Creator',
                        'am Microsoft-savvy',
                        'use GitHub',
                        'develop frontends',
                        'build with React',
                        'build with Next',
                        'build with Tailwind',
                        'build with Springboot'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                      wrapperClassName: "typewriter-wrapper",
                      cursorClassName: "typewriter-cursor",
                    }}
                  />
                </div>
                </div>
              </div>
                
              ) : (
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    Hi! I am Genevieve Miao
                  </div>
                  <div className='flex flex-row gap-2 text-[1rem] lg:text-[4rem] font-bold mb-8'>
                  <div>
                    I am
                  </div>
                {/* === */}
                  <div>
                    <Typewriter
                      options={{
                        strings: [
                          'Focused',
                          'Creative',
                          'Resourceful',
                          'Punctual',
                          'Collaborative'
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 80,
                        wrapperClassName: "typewriter-wrapper",
                        cursorClassName: "typewriter-cursor",
                      }}
                    />
                  </div>
                  </div>
                </div>
              )}
              <button
                onClick={(e) => handleLinkClick(e, 'aboutme')} 
                className='text-white border border-white py-3 px-10 rounded-xl'
                style={{
                  color: isDarkMode ? "" : "#ffffff",
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(0.9)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'none';
                  }}
              >
                More
              </button>
              <button
                onClick={(e) => handleLinkClick(e, 'projects')} 
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(0.9)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'none';
                }}
                className='text-white border border-white py-3 px-10 rounded-xl ml-5'
              >
                View Projects
              </button>
            </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Skills