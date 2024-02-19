import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import SpeakersPC from '@/components/speakers/speakersPC';
import Registration from '@/components/registration';
import SponsorsCloud from "@/components/sponsors";
import Banner from '@/components/banner';

const PrinciplesCoursePage = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Principles Course</title>
      </Head>
      <Banner />
      <div className="btn_wrapper about-btn" data-aos="fade-up" id="icons">
        <div className="container">
          <ul className="flex flex-wrap">
            <Link href="/rail-transit-seminar#icons">
              <li className="rt-hover">
                <figure>
                  <Image
                    src="/rail-transit.svg"
                    width={180}
                    height={100}
                    alt="icon"
                    className="w-full"
                  />
                </figure>
                <div className="text">
                  <h4 className="text-2xl font-bold text-white">
                    Rail Transit Seminar
                  </h4>
                  <p className="text-2xl font-normal text-white">
                    May 21, 2024
                  </p>
                </div>
              </li>
            </Link>
            <li className="pc-active">
              <figure>
                <Image
                  src="/principles-icon.svg"
                  width={180}
                  height={100}
                  alt="principles-icon"
                  className="w-full"
                />
              </figure>
              <div className="text">
                <h4 className="text-2xl font-bold text-white">
                  Principles Course
                </h4>
                <p className="text-2xl font-normal text-white">May 22, 2024</p>
              </div>
            </li>
            <Link href="/heavy-haul-seminar#icons">
              <li className="hh-hover">
                <figure>
                  <Image
                    src="/heavy-haul-icon.svg"
                    width={180}
                    height={100}
                    alt="heavy-haul-icon"
                    className="w-full"
                  />
                </figure>
                <div className="text">
                  <h4 className="text-2xl font-bold text-white">
                    Heavy Haul Seminar
                  </h4>
                  <p className="text-2xl font-normal text-white">
                    {" "}
                    May 23 - 24, 2024
                  </p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="seminar-about-text">
        <div className="mx-auto px-12">
          <h2 className="text-center text-5xl font-normal pb-11 leading-normal">
            Welcome to the{" "}
            <span className="text-wri-green">
              <b>2024 Principles Course</b>
            </span>{" "}
            - May 22, 2024
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-7xl mx-auto mb-24">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-4/6 lg:pr-24 px-4 mb-6">
                  <p className="pt-2 pb-6">
                    Designed for both Rail Transit and Heavy Haul professionals,
                    the{" "}
                    <span className="font-bold text-wri-green">
                      Principles of Wheel/Rail Interaction
                    </span>{" "}
                    is an intensive, full-day course providing in-depth
                    examination of the primary aspects of wheel/rail and
                    vehicle/track interaction, drawing from both theory and
                    practical application. Past courses have covered topics such
                    as wheel truing strategy, rail metallurgy, ultrasonic
                    testing, thermal rail stresses, vehicle-track measurement
                    technologies and much more. The Course offers a
                    cross-disciplinary perspective on the fundamentals
                    recommended for both industry veterans and novice
                    railroaders.
                  </p>
                  <h2 className="seminar-discount-header mt-16">
                    WRI 2024 Discount Programs:
                  </h2>
                  <p className="pt-2 pb-6">
                    Wheel Rail Seminars offers various discount programs,
                    including Multi-Event Discounts and Special Employee
                    Discounts for railroad, transit & government employees.
                  </p>
                  <p className="pt-2 pb-6">
                    <a
                      href="https://wheel-rail-seminars.com/#reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Attendees praise the high-quality presenters & topics, and
                      inclusive approach to dining and networking.
                    </a>
                  </p>
                  <p>
                    NOTE: Attendance at Rail Transit or Heavy Haul seminars is
                    NOT required to register for the Principles Course.
                  </p>
                </div>
                <div className="w-full lg:w-2/6 p-8 bg-wri-green/20 border-l-2 border-wri-green">
                  <h2 className="pt-0 seminar-header text-wri-green/90 pb-4">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="seminar-list pl-5 list-disc">
                    <li>Welcome Reception</li>
                    <li>Continental Breakfast</li>
                    <li>Mid-morning Coffee and Refreshment Break</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Full Line-up of Presentations</li>
                    <li>Afternoon Coffee and Refreshment Break</li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>

                  <h2 className="pt-6 seminar-header text-wri-green/90 pb-4 leading-tight">
                    Attendees are also eligible to receive:
                  </h2>
                  <ul className="seminar-list pl-5 list-disc">
                    <li>
                      Continuing education/professional development credits
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </div>
      <SpeakersPC />
      <Registration />
      {/*<SponsorsCloud />*/}
    </main>
  );
};

export default PrinciplesCoursePage;
