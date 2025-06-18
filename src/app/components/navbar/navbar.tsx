'use client';

import NavBarDesktop from '@/app/components/navbar/navbar-desktop';
import NavbarMobile from '@/app/components/navbar/navbar-mobile';
import Image from 'next/image';
import Link from 'next/link';
import logo_azul from '../../../../public/logo-azul.png';

export default function NavBar() {
  return (
    <div className='bg-[#D9D9D9] flex items-center'>
      <nav className='w-layout py-4 text-zinc-600 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src={logo_azul}
              alt=''
              className='w-[170px] md:w-[150px] lg:w-[150px] xl:w-[200px] md:h-auto'
              loading='lazy'
              quality={100}
              objectFit='cover'
            />
          </Link>
        </div>

        <NavbarMobile />

        <NavBarDesktop />
      </nav>
    </div>
  );
}
