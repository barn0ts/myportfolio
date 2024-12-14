"use client"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NAV_LINKS = [
    { href: '#aboutme', key: 'aboutme', label: 'About Me' },
    { href: '#myskills', key: 'myskills', label: 'My Skills' },
    { href: '#projects', key: 'projects', label: 'Projects' },
  ];

  return (
    <div className="flexCenter mb-24 mt-[-20px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-white">
            {/* Learn More Column */}
            <FooterColumn title="Learn More">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.key)}
                  className="regular-14 flex flex-col gap-4 text-white"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "transform 0.3s ease, color 0.3s ease", 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"; 
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; 
                  }}
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>

            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info Column */}
            <div className="flex flex-col gap-5 text-white">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-white">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Socials Column */}
            <div className="flex flex-col gap-5 text-white">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-white">
                  <Link href="https://www.facebook.com/genevieve.miao.14/" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/fb.svg"
                      alt="Facebook"
                      width={24} 
                      height={24}
                    />
                  </Link>
                  <Link href="https://www.instagram.com/gen_ming" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/insta.svg"
                      alt="Instagram"
                      width={24} 
                      height={24}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/genevieve-miao-8095b433b/" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={24} 
                      height={24}
                    />
                  </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border bg-white" />
        <p className="regular-14 w-full text-center text-white">All rights reserved</p>
      </div>
    </div>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer



