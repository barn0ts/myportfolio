"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Face4Icon from '@mui/icons-material/Face4';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const ICare = () => {
  const images = ['/icareimg1.png', '/icareimg2.png', '/icareimg3.png', '/icarepng4.png', '/icarepng5.png']; 
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
                  App Name : iCare
                </h1>
              </div>
              </a>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                iCare is a comprehensive medical application designed to simplify healthcare management for users. With iCare, users can easily book appointments with doctors, ensuring timely access to medical care. The platform provides a seamless experience by allowing users to browse available healthcare providers, select their preferred doctor, and schedule consultations at their convenience.
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
                  src="/icaremockup.png"
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
                      <p style={{ marginBottom: '5px' }}>Lara Pable</p>
                      <p>Arziel Lawas</p>
                      <p>Roxanne Alcordo</p>
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
                      I am assigned to design several key features for the iCare application, including the appointment booking system, a page to view all doctors, a detailed doctor information page, and the tracking of blood pressure and blood sugar.
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
                      Working on iCare was a unique experience, as it was my first time designing an application in Figma. As a first-timer, I’d say that the design isn’t bad. While bringing our ideas to life, we had to learn the platform’s tools and best practices, which challenged us to adapt and improve our design skills on the go. This process taught me the importance of creativity, problem-solving, and continuous learning when working on a full-scale application.
                  </p>
                </div>
              </div>
              <div className="lg:w-[80%] items-center justify-center self-center hidden lg:flex">
                <img
                  src="/icare overview.png"
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

export default ICare;
