import Image from 'next/image';

const BannerComp = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-auto">
        {' '}
        {/* Adjust width and height as needed */}
        {/* Div to control image size and responsiveness */}
        <div className="w-full h-full overflow-hidden">
          {' '}
          {/* Ensures image covers the full area */}
          <Image
            src="/home-banner.jpg"
            alt="home-banner"
            width={1466} // Original aspect ratio of your image
            height={620}
            className="w-full h-auto object-cover" // Tailwind classes for responsiveness and coverage
            quality={100}
          />
        </div>
      </div>
      {/* Absolute positioning for text, pushed to the bottom with padding */}
      <div className="absolute bottom-0 w-full pb-8 lg:pb-16 md:pb-20">
        <div className="text-center">
          <h1 className=" text-2xl sm:text-6xl text-white text-shadow-outline mb-12 lg:mb-56 xl:mb-8">
            CHICAGO - May 21-24, 2024
          </h1>
          <a
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pulse hover:scale-110 transition-transform text-blue-950 border-4 border-blue-950 text-base md:text-xl px-6 md:px-8 py-2 py-0 mt-4 md:py-3"
          >
            Register now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
