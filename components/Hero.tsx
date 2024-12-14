"use client"
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NAV_LINKS = [
    { href: '#home', key: 'home', label: 'Home' },
    { href: '#aboutme', key: 'aboutme', label: 'About Me' },
    { href: '#myskills', key: 'myskills', label: 'My Skills' },
    { href: '#projects', key: 'projects', label: 'Projects' },
  ];
  
  return (
    <section id="home" className="max-container padding-container flex flex-col gap-20 py-10 pb-5 md:gap-28 lg:py-20 xl:flex-row mt-10">
      <div
            style={{
              width: "100%",
              background: "linear-gradient(180deg, #fbfcfe, #9c9085)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              position: "relative",
            }}
            className='sm:mt-10, xs:mt-10, lg:mt-[-40px]'
        >

      
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div
              style={{
                position: "absolute",
                top: "30px",
                left: "30px",
                color: "#83746f",
              }}
            >
              <div style={{ fontWeight: "500", fontSize: "clamp(8px, 1vw, 20px)" }}>
                <p style={{ margin: 0 }}>Mandaue City,</p>
                <p style={{ margin: 0, color: "#2b2828",}}>Cebu Philippines</p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                color: "#83746f",
                textAlign: "right",
              }}
            >
              <div style={{ fontWeight: "500", fontSize: "clamp(8px, 1vw, 20px)" }}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.key)}
                    style={{
                      display: "block",
                      margin: "5px 0",
                      cursor: "pointer",
                      color: "#2b2828",
                      textDecoration: "none",
                      transition: "transform 0.3s ease, color 0.3s ease", 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)"; 
                      e.currentTarget.style.color = "#83746f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)"; 
                      e.currentTarget.style.color = "#2b2828";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          <h1
              style={{
                position: "absolute",
                fontSize: "clamp(20px, 10vw, 156px)", 
                color: "#fbfcfe",
                zIndex: 10,
                top: "60%",
                textAlign: "center",
                width: "100%",
                fontWeight: "500",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"
              }}
              className="font-brittany"
            >
              Genevieve Miao
            </h1>
          <img
              src="/gen.png"
              alt="Genevieve Miao"
              style={{
                marginTop: "10px",
                objectFit: "cover", 
                width: "75%",
              }}
            />
        
    
      </div>
        
      </div>
    </section>
  )
}

export default Hero