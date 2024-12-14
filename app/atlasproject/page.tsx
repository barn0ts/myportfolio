"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Atlas = () => {
  const images = ['/atlasimg1.png', '/atlasimg2.png', '/atlasimg3.png']; 
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
          background: '#575554',
          borderRadius: '20px',
          borderWidth: '4px',
          borderColor: 'white',
          position: 'relative',
        }}
        className="w-full border-white border-4 lg:w-[5100px] lg:h-full"
      >
         <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10, 
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: 'white',
          }}
          onClick={() => window.history.back()} 
        >
          <ArrowBackIcon style={{ fontSize: '30px' }} />
        </div>

        <div className="flex flex-row gap-[3%]">
          <div className="lg:w-[40%] ml-10 items-center justify-center hidden lg:flex">
            <img
              src={images[currentImageIndex]}
              alt="Slideshow"
              style={{
                marginTop: '10px',
                objectFit: 'cover',
                width: '100%',
                height: '60%',
                borderRadius: '10px',
              }}
            />
          </div>

          <div
            className="lg:w-[55%] w-full p-6 flex flex-col justify-center text-white"
          >
            <div>
              <h1
                style={{
                  fontSize: 'clamp(20px, 5vw, 36px)',
                  wordSpacing: '5px',
                  fontWeight: 'bold',
                }}
                className="mb-1"
              >
                Atlas
              </h1>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                Atlas is a streamlined Balanced Scorecard application designed to help individuals and organizations plan, track, and achieve their goals effectively. With a user-friendly interface and powerful analytics, it simplifies strategic planning.
              </p>
            </div>
            <div className="mt-5">
              <h1
                style={{
                  fontSize: 'clamp(20px, 5vw, 36px)',
                  wordSpacing: '5px',
                  fontWeight: 'bold',
                }}
                className="mb-1"
              >
                Contribution
              </h1>
              <Image 
                        src="/cloveroutline.png"
                        alt="clover"
                        width={190}
                        height={219}
                        className="clover"
                      />
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                I am the Lead UI/UX Developer for Atlas, responsible for designing the application's landing page and most of its features. I ensured the interface is user-friendly and intuitive, allowing users to navigate it effortlessly without additional guidance. Additionally, I created the Atlas logo and prioritized making the application's design visually appealing.
              </p>
            </div>
            <div className="mt-5">
              <h1
                style={{
                  fontSize: 'clamp(20px, 5vw, 36px)',
                  wordSpacing: '5px',
                  fontWeight: 'bold',
                }}
                className="mb-1"
              >
                Explore
              </h1>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                Feel free to explore the application by clicking the button below, which will take you to the deployed version. This will allow you to experience the features, interface, and functionality of Atlas firsthand.
              </p>
              <div className="mt-5">
                <a
                    href="https://citu-atlas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button
                    style={{
                      backgroundColor: '#c59670',
                      color: 'white',
                      padding: '10px 50px',
                      fontSize: '16px',
                      borderRadius: '30px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#aa7b5d')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c59670')}
                  >
                    Visit Atlas
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atlas;
