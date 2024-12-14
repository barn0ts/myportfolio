"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
                width: '40%',
                height: '90%',
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
                Sweet Rush
              </h1>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                SweetRush is a delightful mobile application designed to bring the joy of discovering and ordering sweet treats to users. The app allows users to browse through menus, place orders, and track their deliveries in real time. With an easy-to-use interface and a focus on satisfying your sweet tooth, SweetRush makes indulging in your favorite desserts more convenient than ever.
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
                For SweetRush, I designed the logo and contributed to the design of several key features, including the review section, nutrition facts section, and donation section. 
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
                The design for SweetRush was created using Figma and Android Studio, with no actual code implementation. The app is not deployed, and the focus was on developing detailed prototypes and design elements that can be used as a foundation for future development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetRush;
