import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/constants'

const AppFeatures = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/assets/images/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h2 className="bold-40 lg:bold-64 text-blue-50">Access Services In Our App</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
    title: string;
    description: string;
  }
  
  const FeatureItem = ({ title, description }: FeatureItem) => {
    return (
      <li className="flex w-full flex-1 flex-col items-start">
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
          {title}
        </h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    )
  }

export default AppFeatures