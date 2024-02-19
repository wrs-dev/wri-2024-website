import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D064C] text-white pt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h6>Contact Us</h6>
              <p>Brandon Koenig, Director of Operations</p>
              <a href="tel:847-808-1818" className="footer-link">
                847-808-1818
              </a>
              <p>
                or email at{' '}
                <a
                  href="mailto:brandon@wheel-rail-seminars.com"
                  className="footer-link"
                >
                  brandon@wheel-rail-seminars.com
                </a>
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3>
                Three big railroading events in one location! Special discounts
                for railroad, transit and government employees.
              </h3>
            </div>
            {/* Ensure the icons container is centered in mobile view */}
            <div className="col flex justify-center md:justify-end">
              <ul className="flex justify-center space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/company/wheel-rail-seminars/"
                    className="footer-link"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/WheelRailSem"
                    className="footer-link"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/WheelRailSeminars"
                    className="footer-link"
                  >
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right bg-black text-center py-4">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row justify-between items-center">
              <li>© 2024 Wheel Rail Seminars. All rights reserved.</li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
                <a href="#" className="ml-4 hover:text-white">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
