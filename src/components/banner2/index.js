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
            width={1000} // Original aspect ratio of your image
            height={200}
            className="w-full h-auto object-cover" // Tailwind classes for responsiveness and coverage
          />
        </div>
      </div>
      {/* Absolute positioning for text, pushed to the bottom with padding */}
      <div className="absolute bottom-0 w-full pb-6 md:pb-30">
        <div className="text-center">
          <h1 className="text-2xl lg:text-6xl text-white text-shadow-outline mb-8">
            CHICAGO - May 21-24, 2024
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
