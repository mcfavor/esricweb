"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import InsureChat from "@/components/InsureChat";
import Hero from "@/components/Hero";
import BackgroundLayout from "@/components/BackgroundLayout";
import VideoBackgoundLayout from "@/components/VideoBackgoundLayout";
import Insurance from "@/components/Insurance";
import MobileApp from "@/components/MobileApp";
import AppFeatures from "@/components/AppFeatures";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    // <>
    // <BackgroundLayout children={undefined}>
        
    //     </BackgroundLayout>
    //     <Insurance/>
    //     <MobileApp/>
    // </>
    
     <>
       <VideoBackgoundLayout children={undefined}>
       </VideoBackgoundLayout>
       <Insurance />
       <AppFeatures />
       <MobileApp />
     </>
  );
}
