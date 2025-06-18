'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import PlanoDetalhes from '@/app/planos/_components/planoDetalhes';
import {
  ChartPie,
  FileText,
  Handshake,
  MessageCircleMore,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function LucroReal() {
  const [tabSelecionado, setTabSelecionado] = useState('');

  return (
    <div className='my-8 flex flex-col items-center mx-auto'>
      <span className='text-xl text-white font-medium my-2 text-center'>
        Nossos planos
      </span>
      <Tabs
        defaultValue='premium'
        className='mx-auto'
        onValueChange={setTabSelecionado}
      >
        <div className='flex justify-center mb-4'>
          <TabsList className='flex gap-2 p-2 sm:p-6 bg-zinc-300 w-auto rounded-lg'>
            <TabsTrigger
              value='premium'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Premium
            </TabsTrigger>
            <TabsTrigger
              value='exclusivo'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Exclusivo
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='premium'>
          <PlanoDetalhes
            titulo='Premium'
            subTitulo='Lucro Real'
            descricao='Premium para Empresas de Comércio e/ou serviços no Lucro Real: A solução completa para maximizar seus resultados'
            faturamentoLimite='5.4 milhões'
            socios='02'
            colaborador='10'
            contaBancaria='04'
            investimento={4554}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              {
                nome: 'Consultoria Mensal de 90 minutos \n ( não cumulativo )',
                icone: MessageCircleMore,
              },
              {
                nome: 'Visita trimestral para \n análise contábil',
                icone: Handshake,
              },
            ]}
          />
        </TabsContent>
        <TabsContent value='exclusivo'>
          <PlanoDetalhes
            titulo='Exclusivo'
            subTitulo='Lucro Real'
            investimento={5648}
            planoExclusivo={true}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Consultoria mensal', icone: MessageCircleMore },
              {
                nome: 'Visita trimestral para \n análise contábil',
                icone: Handshake,
              },
            ]}
          />
        </TabsContent>
      </Tabs>

      {tabSelecionado !== 'exclusivo' && (
        <div className='my-6 w-[90%] sm:w-[90%] text-xs md:text-sm text-zinc-300 max-w-6xl mx-auto font-montRegular'>
          <p>
            <strong className='text-white font-montBold'>
              Serviços não inclusos no pacote:
            </strong>{' '}
            Reunião de consultoria até 60 minutos com parecer contábil por
            escrito + R$ 399,90; Reunião de consultoria até 60 minutos sem
            parecer contábil por escrito + R$ 199,90; Colaborador ou Sócio Extra
            + 49,90; Faturamento extra de até 20%; Aumento de 20% no valor do
            plano; Conta bancária extra + 119,90.
          </p>
        </div>
      )}
    </div>
  );
}
