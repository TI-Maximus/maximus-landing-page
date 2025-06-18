import Footer from '@/app/components/footer';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import LucroPresumido from '@/app/planos/planos-maximus/(lucro-presumido)/lucro-presumido-maximus';
import LucroReal from '@/app/planos/planos-maximus/(lucro-real)/lucro-real-maximus';
import SimplesNacional from '@/app/planos/planos-maximus/(simples-nacional)/simples-nacional-maximus';

import BtnWhatsapp from '@/app/components/btn-whatsapp';
import Image from 'next/image';
import logo_branca_maximus from '../../../../public/logo-branca.png';

export default function PlanosMaximus() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[linear-gradient(135deg,_#000F3F_20%,_#000000_50%,_#000F3F_75%)]'>
      <div className='mt-20 mb-12 flex flex-col items-center justify-center text-center text-white'>
        <Image
          src={logo_branca_maximus}
          alt='Máximus Contabilidade'
          className='w-80 h-auto mb-10'
        />
        <p className='text-xl max-w-3xl mx-auto'>
          Soluções completas para empresas: Maximize seus resultados com nossos
          planos personalizados
        </p>
      </div>

      <span className='mt-10 text-xl text-white font-medium my-2 text-center'>
        Selecione a sua Tributação
      </span>
      <Tabs defaultValue='simples-nacional'>
        <div className='flex justify-center mb-4 mx-auto'>
          <TabsList className='flex p-2 sm:p-6 bg-zinc-300  sm:w-auto rounded-lg max-w-full'>
            <TabsTrigger
              value='simples-nacional'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Simples Nacional
            </TabsTrigger>
            <TabsTrigger
              value='lucro-presumido'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Lucro Presumido
            </TabsTrigger>
            <TabsTrigger
              value='lucro-real'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Lucro Real
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='simples-nacional' className=''>
          <SimplesNacional />
        </TabsContent>
        <TabsContent value='lucro-presumido'>
          <LucroPresumido />
        </TabsContent>
        <TabsContent value='lucro-real'>
          <LucroReal />
        </TabsContent>
      </Tabs>
      <BtnWhatsapp />
      <Footer />
    </div>
  );
}
