"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
                Barangay Connect
              </h1>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                Barangay Connect is a community hub designed to enhance communication and engagement within a barangay. The app enables residents to connect with each other, promote their businesses, report incidents, request documents, and access various local services. 
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
                I designed the logo and worked on key features including the announcement section and business posting functionality. Additionally, I was responsible for coding both the frontend and backend for these features, ensuring seamless integration and user experience across the application.
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
                Barangay Connect was developed with complete code implementation, but it was never deployed. The project was built to function fully with both frontend and backend components, though it remains as a completed, non-deployed project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BConnect;
