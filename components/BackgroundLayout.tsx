import React from 'react'
import Hero from './Hero';
import Nav from './Nav';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="bg-image-container rounded-bottom">
      <Nav />
      <Hero />
      {children}
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
  )
}

export default BackgroundLayout