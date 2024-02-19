"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

{/*const logos = [
  "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
];*/}

const LogoRow = () => {
  const logos = [
    "/sponsor-1.png",
    "/sponsor-2.jpg",
    "/sponsor-3.png",
    "/sponsor-4.jpg",
    "/sponsor-5.png",
    "/sponsor-6.png",
    "/sponsor-7.png",
  ];

  // Duplicate the logos array to ensure continuous animation without blank spaces
  const extendedLogos = [...logos, ...logos, ...logos];

  return(
    <div className="marquee-container">
      <div className="animate-marquee flex space-x-16">
        {" "}
        {/* Adjust space-x-8 to increase spacing */}
        {logos.concat(logos).map(
          (
            logo,
            index // concat the logos to make sure there's a continuous stream
          ) => (
            <img
              key={`${logo}-${index}`} // Unique key for each image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-12 mx-auto" // mx-auto to center the logos if there's additional space
            />
          )
        )}
      </div>
    </div>
  );
};

const SponsorsCloud = () => {
  return (
    <section className="pt-24 pb-48">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl font-normal pb-24">
          <strong className="text-wri-blue">Thank you</strong> to our sponsors
        </h2>
        <LogoRow />
      </div>
    </section>
  );
};

export default SponsorsCloud;

