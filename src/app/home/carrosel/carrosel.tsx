import Image from 'next/image';
import { logoEmpresas } from '../carrosel/logo-empresas';

export default function Carrosel() {
  return (
    <section className='h-[300px] flex flex-col justify-center px-4 md:px-8 lg:px-16'>
      <h1 className='text-center text-white text-lg md:text-2xl lg:text-4xl font-semibold'>
        Empresas que confiam na consultoria Máximus
      </h1>

      <div
        data-aos='fade-up'
        data-aos-duration='500'
        className='relative w-full overflow-hidden flex flex-nowrap py-6'
      >
        <ul className='flex min-w-full shrink-0 gap-4 md:gap-6 lg:gap-8 w-max flex-nowrap animate-infinite-scroll'>
          {logoEmpresas.map((logo, index) => (
            <li
              key={index}
              className='flex flex-col justify-center items-center gap-2 lg:gap-4 w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[120px] lg:w-[150px] lg:h-auto relative rounded-2xl px-4 py-2'
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={500}
                height={500}
                className='w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[150px] object-contain'
                loading='lazy'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
