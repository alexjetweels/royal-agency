'use client';

import { useState } from 'react';

import Link from 'next/link';

import { PiCheckCircleFill } from 'react-icons/pi';

import Navbar from '@/components/navbar';

const plans = [
  {
    index: 0,
    name: 'Basic',
    price: 'US $50-$250',
    features: [
      'Never used before',
      'Can spend up to $50-$250 per day.',
      'Regular spending can increase the limit.',
    ],
    style:
      ' rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
    description:
      'Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.',
    button: 'Buy Now',
  },
  {
    index: 1,
    name: 'Premium',
    price: 'US $1500',
    features: [
      'Never used before, with the ability to change time zone and currency.',
      'Can spend up to $1500 per day.',
    ],
    style:
      ' rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
    description:
      'Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.',
    button: 'Buy Now',
  },
  {
    index: 2,
    name: 'Enterprise',
    feature: 'Contact Us',
    price: 'NO LIMIT',
    features: [
      'Never used before, with the ability to change time zone and currency.',
      'Can spend up to $5000 to Unlimited per day.',
    ],
    style:
      ' h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ',
    description:
      'Best for large organizations and startups that need a performant website that looks great and converts visitors to customers.',
    button: 'Contact Us',
  },
];

const Pricing = () => {
  return (
    <div
      className='w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden'
    >
      <Navbar scrollToProcess={() => {}} scrollToServices={() => {}} />

      <div className='flex items-center justify-center flex-col   '>
        <div className='text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50'>
          Simple Pricing <br /> Choose your plan
        </div>
        <div className='grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start '>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className='h-full flex flex-col justify-between border rounded-3xl px-6  '
            >
              <div className={plan.style}>
                <div className='text-4xl flex  items-center font-medium'>
                  {plan.name}
                </div>
                <div className='text-3xl pt-6 '>{plan.price}</div>
                <div className='py-6'>{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className='text-lg  py-2 flex space-x-2 items-center'
                    >
                      <div>
                        {/* render checkmark only for enterprise tab*/}
                        {plan.feature === 'Contact Us' ? (
                          <PiCheckCircleFill className='text-blue-400 mr-2 text-xl size-5' />
                        ) : (
                          <PiCheckCircleFill className='text-green-600 mr-2 text-xl size-5' />
                        )}
                      </div>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
