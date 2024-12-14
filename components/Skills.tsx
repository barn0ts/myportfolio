"use client"
import Image from 'next/image'
import Button from './Button'
import styles from './Skills.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from './variants';

const Skills = () => {
  // Array of skills with titles and subtitles
  const skills = [
    { title: "Front-end Development", subtitle: "Skilled in UI/UX design and wireframing to create user-friendly interfaces." },
    { title: "Programming Languages", subtitle: "Proficient in C, Java, Python, HTML, and CSS." },
    { title: "Design Tools Proficiency", subtitle: "Experienced in using Canva and Figma." },
    { title: "Creativity", subtitle: "Strong ability to think outside the box" },
    { title: "Prioritization", subtitle: "Able to efficiently organize tasks" },
    { title: "Time Management", subtitle: "Skilled in managing multiple tasks and projects efficiently" },
  ];

  return (
    <section id="myskills" className="max-container padding-container flex flex-col md:gap-28 lg:py-20 xl:flex-row">
      <div
        style={{
          position: "absolute",
          top: "45%",
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
            transform: "rotate(-35deg)", // Apply the desired rotation
          }}
        />
        </div>
        <div
        style={{
          position: "absolute",
          top: "62%",
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
            transform: "rotate(65deg) scaleX(-1)", // Apply the desired rotation
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"
            }}
            className="font-brittany"
          >
            My Skills
          </h1>

          <div
            className="grid grid-cols-3 gap-32 lg:mt-[150px] sm:mt-[85px]"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "16px",
              width: "50%",
              paddingBottom: '20px'
            }}
          >
            {skills.map((skill, index) => (
              <div key={index} className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div className={styles.skillContent}>
                      <h3>{skill.title}</h3>
                    </div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className={styles.skillContent}>
                      <p>{skill.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills