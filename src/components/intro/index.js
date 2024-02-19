import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section>
      <div className="flex justify-center p-6 lg:p-14 mx-auto bg-wri-blue/20">
        <div className="max-w-screen-2xl">
          {/* WRI Cards */}
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <article className="flex flex-col items-start bg-white border-b-4 border-wri-yellow">
              <div className="relative w-full">
                <img
                  src="/venues.webp"
                  alt="Continuing Education"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl">
                <div className="group relative px-10 pb-10 content-start">
                  <div className="relative mt-8 flex content-center justify-center items-start gap-x-2">
                    <img
                      src="/WRI.png"
                      alt="WRI"
                      className="h-26px w-76px bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans font-bold text-2xl text-wri-blue">
                        for Continuing Education
                      </h2>
                    </div>
                  </div>
                  <p className="font-sans mt-5 leading-6 text-wri-dark-blue">
                    The Wheel Rail Interaction Conference is a dynamic event
                    that continually seeks to inspire learning and innovation.
                    By attending, you will earn Continuing Education Units
                    (CEUs) toward fulfilling your annual Professional
                    Engineering (PE or P.Eng) requirements.
                  </p>
                </div>
              </div>
            </article>
            {/* Card 2 */}
            <article className="flex flex-col items-start bg-white border-b-4 border-wri-yellow">
              <div className="relative w-full">
                <img
                  src="/speakers.webp"
                  alt="Technical Presentations"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl">
                <div className="group relative px-10 pb-10 content-start">
                  <div className="relative mt-8 flex content-center justify-center items-start gap-x-2">
                    <img
                      src="/WRI.png"
                      alt="WRI"
                      className="h-26px w-76px bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans font-bold text-2xl text-wri-blue">
                        for Technical Presentations
                      </h2>
                    </div>
                  </div>
                  <p className="font-sans mt-5 leading-6 text-wri-dark-blue">
                    Hear from industry leading experts on the latest
                    information on new and existing technology and how it's
                    used to improve wheel/rail & vehicle/track interaction on
                    freight, light rail & metro systems.
                  </p>
                </div>
              </div>
            </article>
            {/* Card 3 */}
            <article className="flex flex-col items-start bg-white border-b-4 border-wri-yellow">
              <div className="relative w-full">
                <img
                  src="/networking.webp"
                  alt="Professional Networking"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl">
                <div className="group relative px-10 pb-10 content-start">
                  <div className="relative mt-8 flex content-center justify-center items-start gap-x-2">
                    <img
                      src="/WRI.png"
                      alt="WRI"
                      className="h-26px w-76px bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <h2 className="font-sans font-bold text-2xl text-wri-blue">
                        for Professional Networking
                      </h2>
                    </div>
                  </div>
                  <p className="font-sans mt-5 leading-6 text-wri-dark-blue">
                    WRI offers a unique platform for fostering meaningful
                    connections and creating lasting impressions. The
                    opportunities for knowledge exchange, identifying new
                    prospects, and enhancing visibility make WRI a great place
                    for professional growth and industry influence.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
