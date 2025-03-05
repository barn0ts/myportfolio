"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Face4Icon from '@mui/icons-material/Face4';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const BConnect = () => {
  const images = ['/bcimg1.png', '/bcimg2.png', '/bcimg3.png']; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row px-20 pt-20 pb-20 min-w-[550px]">
      <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10, 
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, filter 0.3s ease',
            color: 'white',
          }}
          onClick={() => window.history.back()} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(0.9)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'none';
          }}
        >
          <ArrowBackIcon style={{ fontSize: '30px' }} />
        </div>

      <div
        style={{
          background: '#575554',
          borderRadius: '20px',
          borderWidth: '4px',
          borderColor: 'white',
          position: 'relative',
        }}
        className="border-white border-4 lg:w-[3100px] xl:w-[3100px] lg:h-full w-[100%]"
      >
        <div className="flex flex-col">
          <div className="lg:w-[100%] w-full p-6 flex flex-col justify-center text-white">
          <div>
              <a 
              href="https://citu-atlas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className='flex flex-row'
                style={{ cursor: 'pointer' }}>
                <h1
                  style={{
                    fontSize: 'clamp(20px, 5vw, 36px)',
                    wordSpacing: '5px',
                    fontWeight: 'bold',
                  }}
                  className="mb-1"
                >
                  App Name : Barangay Connect
                </h1>
              </div>
              </a>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                Barangay Connect is a community hub designed to enhance communication and engagement within a barangay. The app enables residents to connect with each other, promote their businesses, report incidents, request documents, and access various local services. 
              </p>
            </div>
            <div className="mt-5 flex-row gap-3 hidden lg:flex">
                  <button
                    style={{
                      color: 'white',
                      padding: '5px 15px',
                      fontSize: '15px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      borderWidth: 3,
                      borderColor: 'white'
                    }}
                  >
                    React.js
                  </button>
                  <button
                    style={{
                      color: 'white',
                      padding: '5px 15px',
                      fontSize: '15px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      borderWidth: 3,
                      borderColor: 'white'
                    }}
                  >
                    Tailwind CSS
                  </button>
                  <button
                    style={{
                      color: 'white',
                      padding: '5px 15px',
                      fontSize: '15px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      borderWidth: 3,
                      borderColor: 'white'
                    }}
                  >
                    Figma
                  </button>
                  <button
                    style={{
                      color: 'white',
                      padding: '5px 15px',
                      fontSize: '15px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      borderWidth: 3,
                      borderColor: 'white'
                    }}
                  >
                    Canva
                  </button>
              </div>

              <div className="lg:w-[80%] items-center justify-center self-center hidden lg:flex">
                <img
                  src="/bconmockup.png"
                  style={{
                    marginTop: '10px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '60%',
                    borderRadius: '10px',
                  }}
                />
              </div>

              <div className='flex flex-col lg:flex-row mt-16 lg:mt-1 lg:px-72'> 
                <div className='lg:flex lg:w-[30%] flex-col'>
                  <div className='flex flex-row gap-3'>
                    {/* role */}
                    <Face4Icon style={{ fontSize: '30px' }}/>
                    <p style={{
                      fontSize: 'clamp(14px, 3vw, 24px)',
                      lineHeight: '1.5',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      My Role
                    </p>
                  </div>
                  <div style={{
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      lineHeight: '1.5',
                    }}>
                      <p style={{ marginBottom: '5px' }}>Graphic Designer</p>
                      <p>UI / UX Designer</p>
                      <p>Frontend Developer</p>
                      <p>Backend Developer</p>
                  </div>
                  <div className='flex flex-row gap-3 mt-10'>
                    {/* team */}
                    <PeopleAltIcon style={{ fontSize: '30px' }}/>
                    <p style={{
                      fontSize: 'clamp(14px, 3vw, 24px)',
                      lineHeight: '1.5',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      My Team
                    </p>
                  </div>
                  <div style={{
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      lineHeight: '1.5',
                    }}>
                      <p style={{ marginBottom: '5px' }}>Lara Pable</p>
                      <p>Arvin Santillan</p>
                      <p>Arziel Lawas</p>
                  </div>
                </div>
                <div className='lg:flex lg:w-[70%] flex-col'>
                  <div className='flex flex-row gap-3 mt-10 lg:mt-0'>
                    {/* contributions */}
                    <ChatIcon style={{ fontSize: '30px' }}/>
                    <p style={{
                      fontSize: 'clamp(14px, 3vw, 24px)',
                      lineHeight: '1.5',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      My Contributions
                    </p>
                  </div>
                  <p style={{
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      lineHeight: '1.5',
                    }}>
                      I designed the logo and worked on key features including the landing page, dashboard, summary details, announcement section, and business posting functionality. Additionally, I was responsible for coding both the frontend and backend for announcement and business posting features, ensuring seamless integration and user experience across the application.
                  </p>

                  <div className='flex flex-row gap-2 mt-10'>
                    {/* timeline */}
                    <EmojiObjectsIcon style={{ fontSize: '30px' }}/>
                    <p style={{
                      fontSize: 'clamp(14px, 3vw, 24px)',
                      lineHeight: '1.5',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      Learnings
                    </p>
                  </div>
                  <p style={{
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      lineHeight: '1.5',
                    }}>
                      Working on Barangay Connect taught me the value of collaboration, as it was our very first project where we hard-coded everything. Whenever I felt confused or struggled to understand something, I didn’t hesitate to ask my teammates for help, which greatly enhanced our teamwork. Although my design skills at that time were not as developed, looking back, I can clearly see how much I have improved compared to where I am now.
                  </p>
                </div>
              </div>
              <div className="lg:w-[80%] items-center justify-center self-center hidden mt-10 mb-10 lg:flex">
                <img
                  src="/bconnectwireframe.png"
                  style={{
                    marginTop: '10px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '60%',
                    borderRadius: '10px',
                  }}
                />
              </div>
              
          </div>

        </div>
      </div>
    </div>
  );
};

export default BConnect;
