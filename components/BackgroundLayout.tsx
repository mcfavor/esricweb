import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";

// const BackgroundLayout = () => {
//   return (
//     <div className="bg-color-container rounded-bottom">
//       <Nav />
//       <Hero />
//       <style jsx>{`
//         .bg-color-container {
//           background-color: #1197d5;
//           min-height: 100vh;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default BackgroundLayout;

// import React from 'react'
// import Hero from './Hero';
// import Nav from './Nav';

const BackgroundLayout = () => {
  return (
    <div className="bg-image-container rounded-bottom">
      <Nav />
      <Hero />
      <style jsx>{`
         .bg-image-container {
           background-image: url('/assets/images/happy-family.jpg');
           background-size: cover;
           background-position: center;
           min-height: 100vh;
           image-contain;
         }
       `}</style>
    </div>
  );
};

export default BackgroundLayout;
