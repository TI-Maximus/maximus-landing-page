import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import PlanoDetalhes from '@/app/planos/_components/planoDetalhes';
import { ChartPie, FileText, Gavel, Users, Vibrate } from 'lucide-react';

export default function SimplesNacionalMaxiLine() {
  return (
    <div className='my-8 flex flex-col items-center mx-auto'>
      <span className='text-xl text-white font-medium mb-4 text-center'>
        Selecione o tipo da sua empresa
      </span>
      <Tabs
        defaultValue='servicos-simples-nacional-maxiline'
        className='mx-auto'
      >
        <div className='flex justify-center mb-4'>
          <TabsList className='flex gap-2 p-2 sm:p-6 bg-zinc-300 w-auto rounded-lg'>
            <TabsTrigger
              value='servicos-simples-nacional-maxiline'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Serviços
            </TabsTrigger>
            <TabsTrigger
              value='comercio'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Comércio
            </TabsTrigger>
            <div className='relative'>
              <span className='absolute font-montRegular text-[10px] sm:text-xs py-1 w-[72px] sm:w-[85px] text-center rounded-3xl left-3 -top-1 sm:left-5 sm:-top-0 rotate-[45deg] text-white bg-tag-em-breve'>
                Em Breve
              </span>
              <TabsTrigger
                value='mei'
                disabled
                className='text-xs sm:text-sm md:text-base whitespace-nowrap'
              >
                MEI
              </TabsTrigger>
            </div>
          </TabsList>
        </div>
        <TabsContent value='servicos-simples-nacional-maxiline'>
          <PlanoDetalhes
            titulo='Serviços'
            subTitulo='Simples Nacional'
            descricao='Plano para Empresas de Serviço'
            faturamentoLimite='600 mil'
            socios='01'
            colaborador='01'
            contaBancaria='01'
            investimento={319}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
              { nome: 'Atendimento \n digital por App', icone: Vibrate },
            ]}
          />
        </TabsContent>
        <TabsContent value='comercio'>
          <PlanoDetalhes
            titulo='Comércio'
            subTitulo=''
            descricao='Plano para Empresas de Serviço'
            faturamentoLimite='600 mil'
            socios='01'
            colaborador='02'
            contaBancaria='01'
            investimento={429.9}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
              { nome: 'Atendimento \n digital por App', icone: Vibrate },
            ]}
          />
        </TabsContent>
      </Tabs>

      <div className='my-6 w-[90%] sm:w-[90%] text-xs md:text-sm text-zinc-300 max-w-6xl mx-auto font-montRegular'>
        <p>
          <strong className='text-white font-montBold'>
            Serviços não inclusos no pacote:
          </strong>{' '}
          Reunião de consultoria até 30 minutos com parecer contábil por escrito
          + R$ 299,90; Reunião de consultoria até 30 minutos sem parecer
          contábil por escrito + R$ 149,90; Colaborador ou Sócio Extra + 49,90;
          Faturamento extra de até 20%: + 99,00 reais no plano; Conta bancária
          extra + 119,90; Desconto para empresa sem movimento: 40% do valor do
          Plano Digital.
        </p>
      </div>
    </div>
  );
}
