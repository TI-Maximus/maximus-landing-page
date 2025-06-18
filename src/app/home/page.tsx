import BtnWhatsapp from '@/app/components/btn-whatsapp';
import Carrosel from '@/app/home/carrosel/carrosel';
import { Header } from '@/app/home/header/header';
import NossosServicos from '@/app/home/nossos-servicos';
import { Vantagens } from '@/app/home/vantagens';
import Image from 'next/image';
import balao from '../../../public/balao.png';
import gisa from '../../../public/gisa2-edit.png';

export default function HomeContainer() {
  return (
    <main>
      <Header />

      <div className='py-8 bg-[#D9D9D9] flex justify-center'>
        <section className=' min-h-max flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-12'>
          <Image
            src={gisa}
            alt=''
            className='object-cover w-[250px] lg:w-[400px] xl:w-[500px] h-auto rounded-3xl'
            loading='lazy'
          />
          <div className=' flex flex-col items-center md:block text-white p-4 space-y-4 md:space-y-6 lg:space-y-10'>
            <div className='relative'>
              <Image
                src={balao}
                alt=''
                className='object-cover w-[300px] lg:w-[400px] xl:w-[500px] h-auto rounded-3xl'
                loading='lazy'
              />

              <h1 className='absolute top-5 left-10 md:top-4 md:left-5 lg:top-7 lg:left-8 xl:top-10 xl:left-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white'>
                Potencialize seus <br /> lucros com a Máximus
              </h1>
            </div>

            <div className='space-y-3 lg:space-y-5 text-lg lg:text-xl text-[#02238E] flex justify-center text-center md:text-start'>
              <p>
                Nossa consultoria contábil é a chave para{' '}
                <br className='hidden md:block' /> reduzir custos, assumir o
                controle financeiro e <br className='hidden md:block' />{' '}
                garantir o crescimento do seu negócio.
              </p>
            </div>
          </div>
        </section>
      </div>

      <BtnWhatsapp />

      <div className='w-layout'>
        <Vantagens />
        <Carrosel />
        <NossosServicos />
      </div>
    </main>
  );
}
