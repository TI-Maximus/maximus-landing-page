import BtnWhatsapp from '@/app/components/btn-whatsapp';
import Footer from '@/app/components/footer';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import LucroPresumidoMaxiLine from '@/app/planos/planos-maxiline/(lucro-presumido-maxiline)/lucro-presumido-maxiline';
import SimplesNacionalMaxiLine from '@/app/planos/planos-maxiline/(simples-nacional-maxiline)/simples-nacional-maxiline';
import Image from 'next/image';
import logo_branca_maxiline from '../../../../public/Logo-MaxLine-branca.png';

export default function PlanosMaximus() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[linear-gradient(135deg,_#0281d9_0%,_#000000_35%,#000000_55%,_#0281d9_100%)]'>
      <div className='mt-20 mb-12 flex flex-col items-center justify-center text-center text-white'>
        <Image
          src={logo_branca_maxiline}
          alt='Máximus Contabilidade'
          className='w-72 h-auto mb-10'
        />
        <p className='text-xl max-w-3xl mx-auto'>
          Soluções completas para empresas em crescimento: Maximize seus
          resultados com nossos planos de contabilidade on-line
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
          </TabsList>
        </div>
        <TabsContent value='simples-nacional' className=''>
          <SimplesNacionalMaxiLine />
        </TabsContent>
        <TabsContent value='lucro-presumido'>
          <LucroPresumidoMaxiLine />
        </TabsContent>
      </Tabs>

      <BtnWhatsapp />
      <Footer />
    </div>
  );
}
