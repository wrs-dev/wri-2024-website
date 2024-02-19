import React from 'react';

const SpeakerCard = ({ name, title, company, imageSrc }) => {
    return (
        <div className="relative group">
          <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden">
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 w-11/12 bg-white shadow-md mx-auto left-0 right-0 transform translate-y-1/2">
            <div className="text-center p-4">
              <p className="font-bold text-wri-dark-blue text-2xl">{name}</p>
              <p className="text-gray-600">{title}</p>
            </div>
          </div>
        </div>
      );
    };

const SpeakerGrid2 = () => {
  // Placeholder data array, replace with actual data
  const speakers = [
    { name: 'Shankar Rajaram', title: 'Sound Transit', company: '', imageSrc: 'team-img07.png' },
    { name: 'Corina Moore', title: 'Ontario NorthLand', company: '', imageSrc: 'team-img08.png' },
    { name: 'Gary Wolf', title: 'Wolf Consulting, LLC', company: '', imageSrc: 'team-img09.png' },
    // ... add more speakers as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {speakers.map(speaker => (
          <SpeakerCard key={speaker.name} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerGrid2;