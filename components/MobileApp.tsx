import React from 'react'
import Button from './Button'
import Image from 'next/image'

const MobileApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] mt-10">
        <div className="max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-blue-70 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-white">Get our App for free now!</h2>
                <p className="regular-20 text-white">Available on iOS and Android</p>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/apple-store.svg"
              variant="btn_blue_outline"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/google-play-store.svg"
              variant="btn_blue_outline"
              full
            />
          </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Image src="/assets/images/phones.png" alt="phones" width={550} height={870} />
          </div>
        </div>
    </section>
  )
}

export default MobileApp