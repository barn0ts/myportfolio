"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
          background: '#575554',
          borderRadius: '20px',
          borderWidth: '4px',
          borderColor: 'white',
          position: 'relative',
        }}
        className="w-full border-white border-4 lg:w-[5500px] lg:h-full"
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
          <div className="lg:w-[40%] flex ml-10 items-center justify-center ">
            <img
              src={images[currentImageIndex]}
              alt="Slideshow"
              style={{
                marginTop: '10px',
                objectFit: 'cover',
                width: '40%',
                height: '93%',
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
                iCare
              </h1>
              <p
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                iCare is a comprehensive medical application designed to simplify healthcare management for users. With iCare, users can easily book appointments with doctors, ensuring timely access to medical care.
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
                I am assigned to design several key features for the iCare application, including the appointment booking system, a page to view all doctors, a detailed doctor information page, and the tracking of blood pressure and blood sugar.
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
                The iCare application was designed using Figma, with no code implementation and was not deployed. The project focused on creating detailed prototypes to visualize the user interface and user experience, which were intended as a foundation for future development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICare;
