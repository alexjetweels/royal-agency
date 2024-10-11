'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/navbar';
import SliderOne from '@/components/ui/slider';
import { Spotlight } from '@/components/ui/spotlight';
import Image from 'next/image';
import Link from 'next/link';

import WorkProcess from './work-process';
import Service from './work-process';
import ShopifyStores from './shopify-stores';
import Brands from './brands';
import Services from './services';
import FAQS from './faq';
import { InfiniteMovingCardsDemo } from './snippets/infinite-moving-card-snippet';
import { FaTelegram } from 'react-icons/fa';
// import { useRouter } from 'next/router';

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // const router = useRouter();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToProcess = () => {
    // router.push('/');
    websiteDesignRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const scrollToShopifyStores = () => {
    // router.push('/');
    shopifyStoresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    // router.push('/');
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      <Navbar
        scrollToProcess={scrollToProcess}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToServices={scrollToServices}
      />

      <Spotlight className='hidden md:flex md:-top-80 left-80  ' fill='white' />
      <div className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
          Create, grow, and <br /> scale your business
        </div>
        <p className='mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4'>
          Low Price But Royal Quality, Facebook Ad Account For Rent, Provide All
          Account Types On The Market, Cheap Fees, 7 Days Free Trial, 24/7
          Support
        </p>

        <Link
          href={'https://t.me/Gnas99'}
          target='_blank'
          className='cursor-pointer flex items-center justify-center gap-1 border rounded-full w-48 p-2  mx-auto my-6 text-white '
        >
          Chat now <FaTelegram />
        </Link>

        <div className='w-full pt-20'>
          <SliderOne />
        </div>

        <div ref={graphicDesignRef}>
          <WorkProcess />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        {/* <div ref={brandsRef}>
          <Brands />
        </div> */}
        <div id='services'>
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </div>
  );
}
