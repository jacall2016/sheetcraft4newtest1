import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-opacity-70">
      <div className="bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-heading mb-4 text-light">Welcome to SheetCraft</h1>
        <p className="mb-4 text-light">
          Our application helps you analyze data related to Trypanosoma, also known as African sleeping sickness. We facilitate massive drug screens to see how various drugs affect parameters like pH, cell viability, and glucose levels in the cells.
        </p>

        {/* Trypanosoma Section */}
        <div className="mb-8">
          <div className="h-80 w-full rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/Trypanosoma.png"
                alt="Trypanosoma"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mb-4 text-light">
            This section provides detailed analysis and insights into the effects of different drugs. Our tools allow you to visualize and interpret complex data sets with ease.
          </p>
        </div>

        {/* Scientists Section */}
        <div className="mb-8">
          <div className="h-80 w-full rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/scientists.png"
                alt="Scientists"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mb-4 text-light">
            Explore our comprehensive suite of features designed to support your research and data analysis needs. From data visualization to statistical analysis, our application offers everything you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
