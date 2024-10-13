"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Button from './Button';
import {
  IconArrowLeft,
  IconBrandTabler,
} from "@tabler/icons-react";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = NAV_LINKS.map(link => ({
    label: link.label,
    href: link.href,
    icon: <IconBrandTabler className="text-white h-5 w-5 flex-shrink-0" />,
  }));

  return (
    <>
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/" className="flex gap-2 flex-center">
          <Image src="/assets/images/logo.png" alt="ESRIC Logo" width={70}
            height={70} className="object-contain" />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-20 text-blue-70 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden gap-10">
          <div>
            <a href="/" className="hover:font-bold text-blue-70 regular-20">Login</a>
          </div>
          <Button 
            type="button"
            title="Sign Up"
            variant="btn_blue"
          />
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-block cursor-pointer lg:hidden"
        >
          <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </nav>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>

      <div className={`fixed inset-y-0 right-0 w-64 bg-black bg-opacity-75 text-white z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setSidebarOpen(false)} className="text-white">
              <IconArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Link href="/" className="flex gap-2 flex-center p-4">
              <Image src="/assets/images/logo.png" alt="ESRIC Logo" width={70}
                height={70} className="object-contain" />
            </Link>
            <div className="mt-8 flex flex-col gap-2">
              {sidebarLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:bg-opacity-20">
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 mb-20">
            <div className="mb-5">
            <Button 
              type="button"
              title="Login"
              variant="btn_blue_outline"
            />
            </div>
            <Button 
              type="button"
              title="Sign Up"
              variant="btn_blue_outline"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;