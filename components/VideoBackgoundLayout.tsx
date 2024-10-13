import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'

const VideoBackgoundLayout = ({ children }) => {
  return (
    <div className="video-background-container rounded-bottom">
      <video autoPlay loop muted className="video-background">
        <source src="/assets/videos/family-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <Nav />
        <Hero />
        {children}
      </div>
      <style jsx>{`
        .video-background-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .video-background {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
          transform: translateX(-50%) translateY(-50%);
          z-index: -1;
        }
        .content-overlay {
          position: relative;
          z-index: 1;
          height: 100%;
        }

        @media (max-width: 768px) {
          .video-background {
            height: 100%;
            width: auto;
          }
        }
        
        @media (orientation: portrait) {
          .video-background {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default VideoBackgoundLayout