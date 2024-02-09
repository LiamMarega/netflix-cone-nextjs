import { ReactNode } from 'react';
import Image from 'next/image';
import BackgroundImage from '../../../public/images/login_background.jpg';
import NetflixLogo from '../../../public/images/netflix_logo.svg';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Image
        src={BackgroundImage}
        alt='background image'
        className='hidden sm:flex sm:object-cover -z-10'
        priority
        fill
      />
      <Image
        src={NetflixLogo}
        alt='Logo'
        width={120}
        height={120}
        className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
      />
      {children}
    </div>
  );
}
