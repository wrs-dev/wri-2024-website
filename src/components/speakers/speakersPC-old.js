import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

const SpeakerCard = ({
  name,
  company,
  imageSrc,
  description,
  bioLink,
}) => {
  return (
    <div className="group">
      <div className="relative">
        <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-11/12 bg-white shadow-md mx-auto left-0 right-0 transform translate-y-1/2">
          <div className="text-center p-4">
            <p className="font-bold text-wri-dark-blue text-2xl">{name}</p>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10">
        <Link href={bioLink}>
          <div className="inline-flex text-wri-mid-blue text-sm md:text-2xl cursor-pointer">
            {description}
            <ChevronDoubleRightIcon className="text-wri-red w-16" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center mx-10">
        <Link href={bioLink}>
          <div className="rounded-md text-center text-xl text-white hover:text-wri-red bg-wri-dark-blue py-1 px-2 w-36 cursor-pointer whitespace-nowrap">
            Bio & Abstract
          </div>
        </Link>
      </div>
    </div>
  );
};

// Generating slug-like id from the speaker's name
const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

const SpeakersRT = () => {
  const speakers = [
    {
      name: "Kevin Oldknow",
      title: "",
      company: "Simon Fraser University",
      imageSrc: "kevin-oldknow.jpg",
      description: "Introduction to the Principles of Wheel/Rail Interaction",
    },
    {
      name: "Eric Magel",
      title: "",
      company: "EM-WRI Consulting, Inc.",
      imageSrc: "eric-magel.jpg",
      description: "Introduction to Wheel/Rail Contact Mechanics",
    },
    {
      name: "Gary Wolf",
      title: "",
      company: "Wolf Railway Consulting, LLC",
      imageSrc: "gary-wolf.jpg",
      description: "Track Structures and Components",
    },
    {
      name: "Elton Toma",
      title: "",
      company: "National Research Council, Canada",
      imageSrc: "elton-toma.jpg",
      description: "Vehicle Types, Suspensions and Components",
    },
    {
      name: "Alexandre Woelfle",
      title: "",
      company: "National Research Council, Canada",
      imageSrc: "alexandre-woelfle.jpg",
      description: "Vehicle-Track Interaction and Dynamics",
    },
    {
      name: "Briony Croft",
      title: "",
      company: "Sahaya Consulting (Canada) and Acoustic Studio (Australia)",
      imageSrc: "briony-croft.jpg",
      description: "Fundamentals of Wheel/Rail Noise and Vibration",
    },
    {
      name: "Richard Stock",
      title: "",
      company: "Plasser & Theurer",
      imageSrc: "richard-stock.jpg",
      description: "Wheel/Rail Damage Mechanisms",
    },
    {
      name: "Louisa Stanlake",
      title: "",
      company: "L.B. Foster Rail Technologies Ltd",
      imageSrc: "louisa-stanlake.jpg",
      description: "Principles of Wheel/Rail Friction Management",
    },
    {
      name: "Matthew Dick",
      title: "",
      company: "ENSCO, Inc.",
      imageSrc: "matt-dick.jpg",
      description: "Vehicle-Track Measurement Technologies",
    },
    // ... add more speakers as needed
  ];

  return (
    <section className="bg-white mb-20">
      <div className="container">
        <h2 className="text-center text-5xl font-normal pb-11">
          Meet the{" "}
          <span className="text-wri-green">
            <b>2024 Principles Course</b>
          </span>{" "}
          Speakers
        </h2>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                {...speaker}
                bioLink={`/principles-course-bios-abstracts#bio-${generateSlug(
                  speaker.name
                )}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPC;
