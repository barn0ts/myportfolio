"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Face4Icon from '@mui/icons-material/Face4';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const SweetRush = () => {
  const images = ['/srimg1.png', '/srimg2.png', '/srimg3.png']; 
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
                  App Name : Sweet Rush
                </h1>
              </div>
              </a>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                SweetRush is a delightful mobile application designed to bring the joy of discovering and ordering sweet treats to users. The app allows users to browse through menus, place orders, and track their deliveries in real time. With an easy-to-use interface and a focus on satisfying your sweet tooth, SweetRush makes indulging in your favorite desserts more convenient than ever.
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
                    Prototype
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
                    Android Studio
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

              <div className="lg:w-[80%] items-center justify-center self-center mt-16 hidden lg:flex">
                <img
                  src="/sweetrushmockup.png"
                  style={{
                    marginTop: '10px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
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
                      <p>Lara Pable</p>
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
                      For SweetRush, I designed the logo and contributed to the design of several key features, including the review section, nutrition facts section, payment section, basket, and donation section. 
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
                      Working on Sweet Rush was a unique experience, as we were initially unfamiliar with Android Studio. While familiarizing ourselves with the platform, we simultaneously worked on the project, which challenged us to learn on the go. This process taught me the importance of adaptability and persistence when tackling new tools and technologies.
                  </p>
                </div>
              </div>
              <div className="lg:w-[80%] items-center justify-center self-center hidden mt-10 lg:flex">
                <img
                  src="/sweetrushoverview.png"
                  style={{
                    marginTop: '10px',
                    objectFit: 'cover',
                    width: '80%',
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

export default SweetRush;
