import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import SpeakersHH from '@/components/speakers/speakersHH';
import Registration from '@/components/registration';
import SponsorsCloud from "@/components/sponsors";
import Banner from '@/components/banner';

const HeavyHaulSeminarPage = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Heavy Haul Seminar</title>
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
            <Link href="/principles-course#icons">
              <li className="pc-hover">
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
                  <p className="text-2xl font-normal text-white">
                    May 22, 2024
                  </p>
                </div>
              </li>
            </Link>
            <li className="hh-active">
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
          </ul>
        </div>
      </div>
      <div className="seminar-about-text">
        <div className="mx-auto px-12">
          <h2 className="text-center text-5xl font-normal pb-11 leading-normal">
            Welcome to the{" "}
            <span className="text-wri-red">
              <b>2024 Heavy Haul Seminar</b>
            </span>{" "}
            - May 23-24, 2024
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-7xl mx-auto mb-24">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-4/6 lg:pr-24 px-4 mb-6">
                  <p className="pt-2 pb-6">
                    <span className="font-bold text-wri-red">
                      The Heavy Haul Seminar
                    </span>{" "}
                    is devoted to examining wheel/rail and vehicle/track
                    interaction on heavy haul freight and shared-track passenger
                    systems. The latest information on new and existing
                    technology, and the ways in which it is being used to
                    improve wheel/rail interaction on freight and passenger
                    railways will be presented. Information is disseminated
                    through a combination of seminar sessions, dedicated Q&A
                    periods and “InfoZone” sessions.
                  </p>
                  <p>
                    Since 1994, the Heavy Haul Seminar has been bringing
                    together track and mechanical users, government regulators,
                    researchers and suppliers in a positive, educational setting
                    like none other in the industry.
                  </p>

                  <h2 className="seminar-discount-header mt-16">
                    WRI 2024 Discount Programs:
                  </h2>
                  <p className="pt-2 pb-6">
                    Wheel Rail Seminars offers various discount programs,
                    including Multi-Event Discounts and Special Employee
                    Discounts for railroad, transit & government employees.
                  </p>
                  <p>
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
                </div>
                <div className="w-full lg:w-2/6 p-8 bg-wri-red/20 border-l-2 border-wri-red">
                  <h2 className="pt-0 seminar-header text-wri-red/90 pb-4">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="seminar-list pl-5 list-disc">
                    <li>Welcome Reception</li>
                    <li>Continental Breakfast each morning</li>
                    <li>Full line-up of presentations</li>
                    <li>Mid-morning Coffee and Refreshment Breaks</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Afternoon Coffee and Refreshment Breaks</li>
                    <li>
                      Special “Grand Buffet” Reception on Thursday, May 23, 2024
                    </li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>

                  <h2 className="pt-6 seminar-header text-wri-red/90 pb-4 leading-tight">
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
      <SpeakersHH />
      <Registration />
      {/*<SponsorsCloud />*/}
    </main>
  );
};

export default HeavyHaulSeminarPage;
