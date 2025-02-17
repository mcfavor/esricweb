"use client";

import React from "react";
//import VideoBackgoundLayout from "@/components/VideoBackgoundLayout";
import Insurance from "@/components/Insurance";
import MobileApp from "@/components/MobileApp";
import AppFeatures from "@/components/AppFeatures";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
//import BackgroundLayout from "@/components/BackgroundLayout";

export default function Home() {
  return (
    <>
      <BackgroundLayout></BackgroundLayout>
      {/* <VideoBackgoundLayout></VideoBackgoundLayout> */}
      <Insurance />
      <AppFeatures />
      <MobileApp />
      <Footer />
    </>
  );
}
