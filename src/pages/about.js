import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Registration from '@/components/registration';
import Sponsors from '@/components/sponsors';
import Banner from '@/components/banner';

const about = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || About</title>
      </Head>
      <Banner />
      <div className="btn_wrapper about-btn" data-aos="fade-up">
        <div className="container">
          <ul className="flex flex-wrap">
            <li>
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
                <p className="text-2xl font-normal text-white">May 21, 2024</p>
              </div>
            </li>
            <li>
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
            <li className="active">
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
          </ul>
        </div>
      </div>
      <div className="about-text">
        <div className="container">
          <div className="row flex flex-wrap justify-between">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="about-us">
        <div className="container">
          <h2 className="text-center text-5xl font-normal pb-11">
            <b>Heavy Haul Seminar Now</b> 2024 Speakers
          </h2>
          <div className="row">
            <div className="col-md-4">
              <figure>
                <Image
                  src="/matt-dick.jpg"
                  alt="matt-dick"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Matt Dick</h6>
                <span>ENSCO</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/kevin-oldknow.jpg"
                  alt="kevin-oldknow"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Kevin Oldknow</h6>
                <span>Simon Fraser University</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/brad-kerchief.jpg"
                  alt="brad-kerchief"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Brad Kerchief</h6>
                <span>Norfolk Southern (Retired)</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img04.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Matt Dick</h6>
                <span>ENSCO</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img05.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Matt Dick</h6>
                <span>ENSCO</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img06.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Richard Stock</h6>
                <span>Plasser &amp; Theurer/Plasser American</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img07.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Shankar Rajaram</h6>
                <span>Sound Transit</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img08.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Corina Moore</h6>
                <span>Ontario Northland</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
            <div className="col-md-4">
              <figure>
                <Image
                  src="/team-img09.png"
                  alt="team-img"
                  width={'400'}
                  height={'200'}
                  className="w-full h-auto"
                />
              </figure>
              <div className="box">
                <h6>Gary Wolf</h6>
                <span>Wolf Consulting, LLC</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet,consetur sadipscing elitr, sed diam
              </p>
            </div>
          </div>
        </div>
      </section>
      <Registration />
      <Sponsors />
    </main>
  );
};

export default about;
