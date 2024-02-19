import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC';
import Registration from '@/components/registration';
import SponsorsCloud from "@/components/sponsors";
import Banner from '@/components/banner';

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Bios & Abstracts for Principles Course</title>
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
            </Link>
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
                    {' '}
                    May 23 - 24, 2024
                  </p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="seminar-about-text">
        
      </div>
      <BiosAbstractsPC />
      <Registration />
      {/*<SponsorsCloud />*/}
    </main>
  );
};

export default BiosAbstractsPCPage;
