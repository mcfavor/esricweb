"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Carousel, Card } from './ui/apple-cards-carousel'; // Assuming Carousel & Card are in the ui folder
import { useOutsideClick } from "@/hooks/use-outside-click"; // Importing the hook

const Insurance = () => {
  const carouselRef = useRef<HTMLDivElement>(null); // Create a ref for the carousel
  
  // Define a callback that will run when a click outside the carousel is detected
  const handleClickOutside = () => {
    console.log("Clicked outside the carousel");
    // You can add any custom logic here, like closing the carousel or alerting the user
  };

  // Use the useOutsideClick hook
  useOutsideClick(carouselRef, handleClickOutside);

  // Data for the cards
  const data = [
    {
      category: "Life",
      title: "Secure Your Family's Future",
      src: "/assets/images/life-insurance.jpg",
      content: <DummyContent />,
    },
    {
      category: "House and Home",
      title: "Comprehensive House and Home Cover",
      src: "/assets/images/home-house-insurance.jpg",
      content: <DummyContent />,
    },
    {
      category: "Private Motor",
      title: "Drive with Confidence",
      src: "/assets/images/car-insurance-driving.jpg",
      content: <DummyContent />,
    },
    {
      category: "Funeral",
      title: "Comprehensive Cover For You and Your Family",
      src: "/assets/images/extended-family-funeral.jpg",
      content: <DummyContent />,
    },
    {
      category: "Business",
      title: "Run Your Business With Peace of Mind",
      src: "/assets/images/business-insurance.jpg",
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="max-container flex flex-col">
      <h2 className="mx-20 justify-center bold-52 lg:bold-64 mt-5 md:text-5xl text-blue-70">
        Discover Our Products
      </h2>
      <div className="mx-10">
        <Carousel items={cards} />
      </div>
    </section>
  );
};

// DummyContent component used in the cards
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Comprehensive Coverage for Peace of Mind.</span> 
            Whether it's life, health, auto, or home insurance, we've got you covered with the best plans tailored for you.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Insurance mockup"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default Insurance;
