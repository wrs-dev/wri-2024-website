import React, { useState, useEffect } from 'react';
import PricingEmployeeIndividual from '@/components/pricing-employee-individual';
import PricingEmployeeMulti from '@/components/pricing-employee-multi';
import PricingProfessionalIndividual from '@/components/pricing-professional-individual';
import PricingProfessionalMulti from '@/components/pricing-professional-multi';

const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();

  // Initialize with null values to match server render
  const [countDown, setCountDown] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    // Update the countdown immediately on mount and then set interval
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Update state with calculated time values
      setCountDown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return countDown;
};

const RegistrationComp = () => {
  const { days, hours, minutes, seconds } = useCountdown('2024-05-21T00:00:00');

  return (
    <section id="register" className="register-now py-12">
      <h2 className="text-center text-5xl font-normal pb-11 px-4 leading-normal">
        <b>Register Now</b> to receive Early-bird Discounts!
      </h2>
      <div className="row">
        <div className="container">
          <ul className="flex flex-wrap justify-center pb-16">
            <li>
              <h4>{days}</h4>
              <span>Days</span>
            </li>
            <li>
              <h4>{hours}</h4>
              <span>Hours</span>
            </li>
            <li>
              <h4>{minutes}</h4>
              <span>Minutes</span>
            </li>
            <li>
              <h4>{seconds}</h4>
              <span>Seconds</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Employee Column */}
            <div className="flex flex-col px-4 mb-4">
              <div>
                <h5 className="text-4xl text-white font-bold text-center mb-8">
                  Employee Registration
                </h5>
                <p className="text-white pb-4 mb-6">
                  Employee Pricing is designed for direct, full time employees
                  of qualifying railroads, transit agencies and government
                  agencies. (You must be paid directly from a railroad, transit
                  agency or government agency and receive a W-2 or similar). No
                  Contractors are eligible for Employee Pricing.
                </p>
                <p className="text-white mb-10">
                  Employees registering for more than one event will receive
                  special Multi-Event Discounts.
                </p>
              </div>
              <div className="mt-auto">
                <PricingEmployeeIndividual />
                <PricingEmployeeMulti />
                <div className="text-center mt-12 mb-12 lg:mb-0">
                  <a
                    href="/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pulse hover:scale-110 transition-transform text-blue-950 border-4 border-blue-950 text-lg md:text-xl px-6 md:px-8 py-2 md:py-3"
                  >
                    Register now!
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Column */}
            <div className="flex flex-col px-4 mb-4 mt-8 lg:mt-0">
              <div>
                <h5 className="text-4xl text-white font-bold text-center mb-8">
                  Professional Registration
                </h5>
                <p className="text-white pb-4 mb-6">
                  Professional Pricing is for suppliers, contractors,
                  consultants and others who are not an employee of a railroad,
                  transit agency or government agency.
                </p>
                <p className="text-white mb-10">
                  Professionals registering for more than one event will receive
                  special Multi-Event Discounts.
                </p>
              </div>
              <div className="mt-auto">
                <PricingProfessionalIndividual />
                <PricingProfessionalMulti />
                <div className="text-center mt-12">
                  <a
                    href="/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pulse hover:scale-110 transition-transform text-blue-950 border-4 border-blue-950 text-lg md:text-xl px-6 md:px-8 py-2 md:py-3"
                  >
                    Register now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationComp;
