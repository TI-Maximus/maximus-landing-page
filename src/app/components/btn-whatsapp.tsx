import Image from 'next/image';
import btnWhats from '../../../public/logo-whatsapp.svg';

export default function BtnWhatsapp() {
  return (
    <div className='p-3 flex items-center justify-center rounded-full fixed bottom-10 right-4 md:right-8 z-10 bg-green-400 hover:bg-green-600'>
      <a
        href='https://wa.me/5599984448258?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20site!'
        target='_blank'
      >
        <Image src={btnWhats} alt='' className='w-8 md:w-10' />
      </a>
    </div>
  );
}
