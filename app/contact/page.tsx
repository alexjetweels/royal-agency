'use client';

import Navbar from '@/components/navbar';
import Link from 'next/link';
import { FaTelegram, FaSkype } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <div className=' w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden '>
      <Navbar scrollToProcess={() => {}} scrollToServices={() => {}} />
      <div className='md:flex items-start justify-center md:py-20 px-6'>
        <div className=''>
          <div className='text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            Contact Us
          </div>
          <div className='py-4 text-gray-300'>
            Let&apos;s talk about how Royal Agency can help your business.
          </div>

          <div className='bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col'>
            <div className='flex gap-4 border-b '>
              <div className=' font-normal pb-4 '>
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className='flex gap-4 border-b '>
              <div className=' font-normal pb-4 '>
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className='flex gap-4  '>
              <div className=' font-normal pb-4 '>
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-7'>
          <Link href={'https://t.me/jacksproyal'} target='_blank'>
            <div className='flex gap-4 items-center'>
              <FaTelegram color='white' size={50} />{' '}
              <span className='text-white font-bold'>Jack | Telegram</span>
            </div>
          </Link>

          <Link href={'https://t.me/Gnas99'} target='_blank'>
            <div className='flex gap-4 items-center'>
              <FaTelegram color='white' size={50} />{' '}
              <span className='text-white font-bold'>
                Royal Agency | Telegram
              </span>
            </div>
          </Link>

          <Link
            href={'https://join.skype.com/invite/pHCdCJuQHHVO'}
            target='_blank'
          >
            <div className='flex gap-4 items-center'>
              <FaSkype color='white' size={50} />{' '}
              <span className='text-white font-bold'>Jack | Skype</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
