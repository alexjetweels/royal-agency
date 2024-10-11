'use client';

import { ThreeDCardExample } from './snippets/3d-card-snippet';

const WorkProcess = () => {
  return (
    <div>
      <div className=' p-4   mx-auto relative z-10  w-full pt-20 md:pt-32'>
        <div className='text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50'>
          Cooperate Policy and Work Process <br />
        </div>

        <div className='items-stretch flex flex-wrap justify-center md:mx-auto md:space-x-10'>
          <ThreeDCardExample
            step='Step 1'
            description='Your campaign will be tested using our accounts'
            image='/images/process-1.jpg'
          />
          <ThreeDCardExample
            step='Step 2'
            description='Setting up the accounts and pages in the VPS (RDP) or Adspower. Let the clients VPS access to check the accounts'
            image='/images/process-2.png'
          />
          <ThreeDCardExample
            step='Step 3'
            description='After check everything OK with you, you finish payment to start'
            image='/images/process-3.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
