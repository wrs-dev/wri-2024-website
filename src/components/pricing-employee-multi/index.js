import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PricingEmployeeMulti() {
  return (
    <section className="lg:px-12 px-0">
      <div className="bg-white shadow-md rounded-3xl mb-4 overflow-hidden">
        <div className="bg-yellow-500 px-8 py-4">
          <h1 className="text-xl font-bold text-blue-950">
            Employee Registration - Multi-Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8">
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Rail Transit Seminar <em>Plus</em> Principles Course (2 Days)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$850</span> Early Bird: $765
            </h2>
            <p className="text-md text-gray-500">May 21 - 22, 2024</p>
          </div>
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Heavy Haul Seminar <em>Plus</em> Principles Course (3 Days)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$1,300</span> Early Bird:
              $1,170
            </h2>
            <p className="text-md text-gray-500">May 22-24, 2024</p>
          </div>
          <div className="mb-4">
            <h2 className="text-md font-semibold text-blue-950">
              Rail Transit Seminar <em>Plus</em> Principles Course <em>Plus</em>{' '}
              Heavy Haul Seminar Seminar (4 Days)
            </h2>
            <h2 className="text-md text-sky-500">
              Cost: <span className="line-through">$1,650</span> Early Bird:
              $1,485
            </h2>
            <p className="text-md text-gray-500">
              May 21 - 24, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
