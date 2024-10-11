import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  PiAddressBook,
  PiHeadsetFill,

  PiStorefront,
  PiFolderUserBold,
  PiCreditCardBold,
  PiPlugsDuotone,
  PiShoppingCart
} from 'react-icons/pi';

export function CardHoverEffectDemo() {
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiAddressBook className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'Advertising accounts',
    description:
      'Includes all good accounts on the market that match customer requirements ( Credit line account, Personal account, BM verify account,...) with no limit spending, free change',
  },
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiStorefront className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'VPS (RDP) / Adspower (clean proxy)',
    description:
      'Just access the VPS, check the accounts and launch the campaigns followed your targets. Accounts and other issues will be supported 24/7 by our team',
  },
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiFolderUserBold className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'Profiles',
    description: 'Profiles that have bypassed bans',
  },
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiCreditCardBold className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'Credit cards',
    description: 'Set up available in the accounts. 100% safe and secure.',
  },
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiPlugsDuotone className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'Old and Strong Pages',
    description:
      'The bluetick page can be used when the advertisement meets the requirements',
  },
  {
    icon: (
      <div className='bg-blue-100 p-4 rounded-full'>
        <PiShoppingCart className='w-8 h-8 text-blue-600' />
      </div>
    ),
    title: 'Products',
    description:
      'We accept all advertising products. Beside the White Hat products (100% accepted), we also support with the Black Hat: Crypto, NFT, Gambling',
  },
];
