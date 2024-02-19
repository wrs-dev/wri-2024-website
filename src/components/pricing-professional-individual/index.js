import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PricingProfessionalIndividual() {
  return (
    <section className="lg:px-12 px-0">
      <div className="bg-white shadow-md rounded-3xl mb-4 overflow-hidden">
        <div className="bg-blue-950 px-8 py-4">
          <h1 className="text-xl font-bold text-white">
            Professional Registration - Individual Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8">
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Rail Transit Seminar (1 Day)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$750</span> Early Bird: $675
            </h2>
            <p className="text-md text-gray-500">May 21, 2024</p>
          </div>
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Principles Course (1 Day)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$600</span> Early Bird: $540
            </h2>
            <p className="text-md text-gray-500">May 22, 2024</p>
          </div>
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Heavy Haul Seminar (2 Days)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$1,200</span> Early Bird:
              $1,080
            </h2>
            <p className="text-md text-gray-500">
              May 23 - 24, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
