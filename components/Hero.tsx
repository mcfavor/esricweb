import React from 'react'
import { FlipWords } from './ui/flip-words';
import Button from './Button';

const Hero = () => {
  const words = ["golden", "safe", "happy", "peaceful"];
  
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-5 lg:py-20 min-h-screen">
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="bold-52 lg:bold-88 text-blue-70">
          Ensuring your
          <FlipWords className="text-yellow-50" words={words} /> <br />
          tomorrow, <span className="text-blue-50">today</span>
        </h1>
        <p className="bold-18 lg:bold-20 text-blue-70 xl:max-w-[520px]">
          At Eswatini Royal Insurance Corporation, we offer a wide range of life and non-life insurance services to meet your needs.
        </p>

        <div className="flex flex-col w-50 gap-5 sm:flex-row mt-5">
          <Button 
            type="button" 
            title="Get Quote" 
            variant="btn_yellow" 
          />
          <Button 
            type="button" 
            title="Ask InsureChat" 
            variant="btn_yellow_outline" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
