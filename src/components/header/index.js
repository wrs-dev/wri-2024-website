import Image from 'next/image';
import Link from 'next/link';
import { useActivePath } from './useActivePath';

const Header = () => {
  const isActivePath = useActivePath();

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="https://www.masstransitmag.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/MassTransit-PresentingSponsor.png"
                width={258}
                height={75}
                alt="Mass Transit Logo"
                unoptimized // if you're not using an image optimization loader
              />
            </a>
          </div>
          <Link href="/">
            <Image
              src="/wri-2024-full.svg"
              width={1000}
              height={200}
              alt="WRI 2024"
              unoptimized // if you're not using an image optimization loader
            />
          </Link>
          <div className="flex items-center">
            <a
              href="https://www.rtands.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/RT&S-PresentingSponsor.png"
                width={217}
                height={75}
                alt="RT&S Logo"
                unoptimized // if you're not using an image optimization loader
              />
            </a>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-between">
            <li>
              <a href="https://wheel-rail-seminars.com" target="_blank">
                Wheel Rail Seminars
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`link ${isActivePath('/') ? 'active-home' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a href="/#register">Pricing/Registration</a>
            </li>
            <li>
              <a href="/#hotel">Hotel Reservations</a>
            </li>
            <li>
              <a href="https://interfacejournal.com/" target="_blank">
                Interface Journal
              </a>
            </li>
            <li>
              <a
                href="http://archive.wheel-rail-seminars.com/us/downloads.php"
                target="_blank"
              >
                Archives
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
