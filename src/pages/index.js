import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Intro from '@/components/intro';
import Banner from '@/components/banner';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2024 || Home</title>
      </Head>

      <Banner />
      <div className="btn_wrapper">
        <div className="container">
          <ul className="flex flex-wrap">
            <Link href="/rail-transit-seminar#icons">
              <li className="rt-active">
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
                  <p className="text-2xl font-normal text-white">
                    May 22, 2024
                  </p>
                </div>
              </li>
            </Link>
            <Link href="/heavy-haul-seminar#icons">
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
            </Link>
          </ul>
        </div>
      </div>
      <div className="about-container pb-40 text-center">
        <p>
          Now in its 29th year, the Wheel/Rail Interaction Conference (WRI '24)
          will be held in Chicago, IL, the site of the very first conference in
          1994. The Wheel Rail Interaction Conference is designed to inform and
          educate professionals who work for railroads, transit agencies,
          contractors, government regulators, researchers, and consulting firms.
          The conference focuses on the complex and critical interaction between
          the wheel and the rail (vehicle/track).
        </p>
        <p className="pt-5">
          {" "}
          WRI '24 conference is three freestanding seminars:{" "}
          <em>The Rail Transit Seminar</em> on May 21, the{" "}
          <em>Principles of Wheel/Rail Interaction</em> on May 22 and the{" "}
          <em>Heavy Haul Seminar</em> on May 23-24, 2024. We welcome back our
          Presenting Sponsor for the Rail Transit Seminar -{" "}
          <a
            href="https://www.masstransitmag.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mass Transit Magazine
          </a>{" "}
          and welcome for the very first time, our new Presenting Sponsor for
          the Heavy Haul Seminar -{" "}
          <a
            href="https://www.rtands.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Railway Track & Structures (RT&S)
          </a>
          .
        </p>
      </div>
      <Intro />
      <section className="expo-zone">
        <div className="container">
          <div className="row grid">
            <div className="col">
              <ul className="grid">
                <li>
                  <h4 className="text-4xl primary-color">ExpoZone</h4>
                  <span className="pb-10 block">
                    during the entire <br /> WRI 2024 Conference
                  </span>
                  <p>
                    The ExpoZone is a strategically designed space within the
                    WRI conference venue that serves as a prime location for
                    sponsors to showcase their brands to a highly engaged and
                    diverse audience.{" "}
                  </p>
                  <a
                    className="pt-4 text-red-500"
                    href="/2024-Final-Sponsorship-kit.pdf"
                  >
                    Learn how to become a sponsor [PDF]
                  </a>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/expo-zone.jpg"
                      width={360}
                      height={200}
                      alt="classes-image"
                      className="w-full"
                      quality={100}
                    />
                  </figure>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="grid">
                <li>
                  <h4 className="text-4xl primary-color">InfoZone</h4>
                  <span className="pb-10 block">
                    included with the <br /> Heavy Haul Seminar
                  </span>
                  <p>
                    Our InfoZone partners offer high-quality technical
                    information on wheel/rail interaction. These sessions are
                    built into the Heavy Haul Seminar program and designed for
                    small group interaction.{" "}
                  </p>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/info-zone-hires.jpg"
                      width={360}
                      height={200}
                      alt="info-zone"
                      className="w-full"
                      quality={100}
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Registration id="registration" />
      {/* <CventWidget className="cvt-embed" /> */}
      {/*<SponsorsCloud />*/}
      <section className="interface">
        <div className="container">
          <div className="row grid">
            <div className="col">
              <h4 className="relative capitalize pb-10 inline-block">
                EXPERT COVERAGE OF WRI
              </h4>
              <div className="flex">
                {/* Flex container for the logo and the text */}
                <figure>
                  <Image
                    src="/ij-logo.png"
                    alt="Interface Journal"
                    width={"900"}
                    height={"312"}
                  />
                </figure>
                <div className="pl-20">
                  <p className=" text-gray-800">
                    Interface journal is devoted to examining issues associated
                    with wheel/rail interaction and ways in which technology is
                    being used to resolve them on railroads and transit systems
                    around the world.
                  </p>
                </div>
              </div>
              <h5 className="text-3xl font-bold primary-color my-10">
                Squats and Studs: Emergent Damage Mechanisms on Rail Transit
                Systems{" "}
              </h5>
              <ul className="flex flex-wrap">
                <li>
                  <p>
                    The unforgiving environment of the wheel/rail interface
                    creates many damage mechanisms. These manifest in defects as
                    varied as corrugations, rolling contact fatigue, and
                    gage-corner cracking, to name only a few. Among the most
                    vexing defects that commuter, transit and high-speed rail
                    lines contend with are squat-type defects …{" "}
                    <a
                      className="inline-block"
                      href="https://interfacejournal.com/archives/29636"
                    >
                      <span className="text-sm">[continued]</span>
                    </a>
                  </p>
                </li>
                <li>
                  <figure>
                    <Image
                      src="/post-grind-stud.webp"
                      alt="interface journal post grind stud"
                      width={"300"}
                      height={"200"}
                    />
                  </figure>
                </li>
                <li>
                  <a
                    href="https://interfacejournal.com/"
                    className="pt-5 inline-block"
                  >
                    Visit IJ for this and other articles
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="announcements">
                <ul className="p-7">
                  <li className="flex flex-wrap items-center">
                    <h5 className="text-4xl font-bold">WRI Announcements</h5>
                  </li>
                </ul>
                <div className="text-box p-7">
                  <h4 className="mb-1 font-bold">
                    Wheel Rail Seminars has a new website!
                  </h4>
                  <p className="relative mb-5">
                    {" "}
                    Since 1993, Wheel Rail Seminars (WRS) has produced the
                    Wheel/Rail Interaction Conference (WRI). Over the many
                    years, the conference has become synonymous with high
                    quality, practical presentations and the very best in
                    networking.{" "}
                    <a
                      className="text-red-500"
                      href="https://wheel-rail-seminars.com/"
                    >
                      Visit the new website.
                    </a>
                  </p>
                  <h4 className="mb-1 font-bold">
                    Gary Wolf wins the WRI 2023 Worth Award
                  </h4>
                  <p className="relative">
                    {" "}
                    Gary Wolf, president of Wolf Railway Consulting, is the
                    recipient of the 2023 Worth Award. The award, presented by
                    Wheel Rail Seminars at the annual Wheel/Rail Interaction
                    conference in June, is named for Art Worth, who was Manager
                    of Standards and retired as Senior Manager – Advanced
                    Technology at Canadian National.{" "}
                    <a
                      className="text-red-500"
                      href="/gary-wolf-worth-award.pdf"
                    >
                      View the story (PDF).
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hotel" className="hare-hotel py-32">
        <div className="container">
          <div className="row grid">
            <div className="col">
              <h4 className="text-2xl font-bold mb-4">
                WRI ’24 – Host Hotel – Book your Room
              </h4>
              <div className="grid grid-cols-1">
                <figure>
                  <Image
                    src="/loews-hotel-web.jpeg"
                    alt="loews-hotel"
                    width={"400"}
                    height={"200"}
                    className="w-full h-auto"
                  />
                </figure>
                <div>
                  <h5 className="text-3xl font-bold mb-6 primary-color">
                    Loews Chicago O’Hare Hotel
                  </h5>
                  <h6 className="text-lg font-bold mb-8">
                    5300 N River Rd, Rosemont, IL 60018
                  </h6>
                  <a
                    href="https://www.loewshotels.com/chicago-ohare/group-wheel-rail-interaction-24"
                    className="btn text-lg inline-block border-4 border-blue-950 text-blue-950 py-2 px-4 rounded"
                  >
                    Reservations
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <h2>Making Reservations/Discounted Rate:</h2>
              <p className="text-base mb-3.5">
                {" "}
                You can use Loews Chicago O'Hare Hotel's secure online
                reservation system to book, modify or cancel your reservation{" "}
                <a
                  className="text-red-500"
                  href="https://www.loewshotels.com/chicago-ohare/group-wheel-rail-interaction-24"
                >
                  here
                </a>
                .
              </p>
              <p className="text-base mb-3.5">
                Our Discounted Room Rate is <b>$199.00</b> per night.
              </p>
              <p className="text-base mb-3.5">
                Reservations must be received on or before the cut-off date of
                Monday, April 29, 2024. Once our room block is full, you may not
                be able to receive our special rate.
              </p>
              <p className="text-base mb-3.5">
                If you require additional reservations assistance, you may
                contact the hotel reservation department at 1-847-544-5300 and
                refer to the group by name: 
                <b>Wheel Rail Interaction Conference 2024.</b>
              </p>
              <h2>Room Deposits/Guarantees:</h2>
              <p className="text-base mb-3.5">
                <b>
                  Hotel reservations requires a credit card guarantee to secure
                  your room reservation.
                </b>
                 Should you need to cancel your reservation, reservations must
                be canceled a minimum of 48 hours prior to arrival, 5PM hotel
                time, to avoid a one night cancellation penalty.
              </p>
              <h2>Reservation Confirmation:</h2>
              <p className="text-base mb-3.5">
                You will receive your hotel confirmation email directly from the
                hotel.
              </p>
              <p className="text-base mb-3.5">
                <b>
                  Reservation must be cancelled by 5:00pm, local hotel time, two
                  days prior to arrival date.
                </b>
                 Failure to cancel by 5:00pm, 48 hours prior will result in the
                loss of one night's room and tax on your credit card.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
