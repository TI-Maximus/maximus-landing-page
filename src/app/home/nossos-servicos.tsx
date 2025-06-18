'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import iconZap from '../../../public/icon-ok.png';


export default function NossosServicos() {
  const [selectedTab, setSelectedTab] = useState('contabil');

  return (
    <section className='container mx-auto px-4 py-20'>
      <h2 className='text-3xl font-bold mb-12 text-center text-white'>
        Nossos Serviços
      </h2>
      <Tabs
        defaultValue={selectedTab}
        onValueChange={setSelectedTab}
        className='w-full max-w-3xl mx-auto '
      >
        <TabsList className='grid mb-2 p-1 w-full grid-cols-3 bg-gray-300 rounded-md'>
          <TabsTrigger
            value='contabil'
            className={
              selectedTab === 'contabil' ? 'nossosServicosAbaAtiva' : ''
            }
          >
            Contábil
          </TabsTrigger>
          <TabsTrigger
            value='fiscal'
            className={selectedTab === 'fiscal' ? 'nossosServicosAbaAtiva' : ''}
          >
            Fiscal
          </TabsTrigger>
          <TabsTrigger
            value='trabalhista'
            className={
              selectedTab === 'trabalhista' ? 'nossosServicosAbaAtiva' : ''
            }
          >
            Trabalhista
          </TabsTrigger>
        </TabsList>
        <TabsContent value='contabil'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>Serviços Contábeis</h3>
              <ul className='space-y-2'>
                {[
                  'Escrituração contábil',
                  'Elaboração de demonstrações financeiras',
                  'Análise de balanços e demonstrações',
                  'Envio de declarações acessórias ECD/ECF',
                  'Planejamento tributário',
                  'Consultoria contábil especializada',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className='flex items-center'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className='h-5 w-5 text-green-500 mr-2' /> {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='fiscal'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>Serviços Fiscais</h3>
              <ul className='space-y-2'>
                {[
                  'Classificação e Lançamento de Notas Fiscais',
                  'Apuração de Tributos.',
                  'Emissão de Guias de Recolhimento.',
                  'Envio das Declarações Fiscais.',
                  'Atualização e Monitoramento da Legislação Fiscal.',
                  'Orientação quanto Emissão de notas fiscais.',
                  'Gestão de Benefícios e Incentivos Fiscais.',
                  'Negociações  com benefícios.',
                  'Renegociações em condições mais favoráveis.',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className='flex items-center'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className='h-5 w-5 text-green-500 mr-2' /> {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='trabalhista'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>
                Serviços Trabalhistas
              </h3>
              <ul className='space-y-2'>
                {[
                  'Admissão de Funcionários',
                  'Gestão da Folha de Pagamento',
                  'Controle de férias',
                  'Gestão de benefícios',
                  'Encargos e Obrigações Trabalhistas',
                  'Processos de Rescisão',
                  'Gerenciamento do eSocial',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className='flex items-center'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className='h-5 w-5 text-green-500 mr-2' /> {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
<div className="mt-16 flex justify-center">
  <a
    href="https://wa.me/5599984448258?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20site!"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center 
      bg-white text-[#02238E] font-medium 
      text-xs sm:text-sm lg:text-base 
      px-3 py-2 sm:px-4 sm:py-2.5 
      rounded-full shadow-lg 
      hover:brightness-95 transition 
      w-[220px] h-[42px] sm:w-[280px] sm:h-[50px] lg:w-auto lg:h-auto
    "
  >
    <span className="
      bg-[#02238E] rounded-full 
      w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] 
      flex items-center justify-center mr-2
    ">
      <Image
        src={iconZap}
        alt="Ícone WhatsApp"
        width={14}
        height={14}
        className="object-contain"
      />
    </span>
    Fale com um especialista
  </a>
</div>
    </section>
  );
}
