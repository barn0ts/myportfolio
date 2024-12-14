// "use client"
// import { NAV_LINKS } from "@/constants";
// import { Button } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
//     e.preventDefault();
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "20px",
//         left: "50%",
//         width: "40%",
//         height: "8%",
//         backgroundColor: "#2c2829",
//         borderRadius: "15px",
//         padding: "10px 0",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <nav className="flexCenter max-container padding-container relative z-30 py-5">
//         <ul className="hidden h-full gap-12 lg:flex text-white lg:text-sm">
//           {NAV_LINKS.map((link) => (
//             <li key={link.key}>
//               <a
//                 href={`#${link.key}`}
//                 className="flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
//                 onClick={(e) => handleLinkClick(e, link.key)}
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <Image
//           src="menu.svg"
//           alt="menu"
//           width={32}
//           height={32}
//           className="inline-block cursor-pointer lg:hidden"
//         />
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
