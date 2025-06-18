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
  Gavel,
  MessageCircleMore,
  Users,
} from 'lucide-react';

export default function SimplesNacional() {
  return (
    <div className='my-8 flex flex-col items-center mx-auto'>
      <span className='text-xl text-white font-medium my-2 text-center'>
        Nossos planos
      </span>
      <Tabs defaultValue='starter' className='mx-auto'>
        <div className='flex justify-center mb-4'>
          <TabsList className='flex gap-2 p-2 sm:p-6 bg-zinc-300 w-auto rounded-lg'>
            <TabsTrigger
              value='starter'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Starter
            </TabsTrigger>
            <TabsTrigger
              value='essencial'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Essencial
            </TabsTrigger>
            <TabsTrigger
              value='avancado'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Avançado
            </TabsTrigger>
            <TabsTrigger
              value='master'
              className='text-xs sm:text-sm md:text-base whitespace-nowrap'
            >
              Master
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='starter'>
          <PlanoDetalhes
            titulo='Starter'
            subTitulo='Simples Nacional'
            descricao='Starter para Empresas de Serviço no Simples Nacional: A solução completa para maximizar seus resultados'
            faturamentoLimite='600 mil'
            socios='02'
            colaborador='01'
            contaBancaria='01'
            investimento={759}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
            ]}
          />
        </TabsContent>
        <TabsContent value='essencial'>
          <PlanoDetalhes
            titulo='Essencial'
            subTitulo='Simples Nacional'
            descricao='Essencial para Empresas de Comércio e/ou serviços no Simples Nacional: A solução completa para maximizar seus resultados'
            faturamentoLimite='1.2 milhões'
            socios='02'
            colaborador='03'
            contaBancaria='02'
            investimento={1366.2}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
              {
                nome: 'Consultoria Mensal de 30 minutos \n ( não cumulativo )',
                icone: MessageCircleMore,
              },
            ]}
          />
        </TabsContent>
        <TabsContent value='avancado'>
          <PlanoDetalhes
            titulo='Avançado'
            subTitulo='Simples Nacional'
            descricao='Avançado para Empresas de Comércio e/ou serviços no Simples Nacional: A solução completa para maximizar seus resultados'
            faturamentoLimite='2.4 milhões'
            socios='03'
            colaborador='06'
            contaBancaria='04'
            investimento={1897.5}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
              {
                nome: 'Consultoria Mensal de 60 minutos \n ( não cumulativo )',
                icone: MessageCircleMore,
              },
            ]}
          />
        </TabsContent>
        <TabsContent value='master'>
          <PlanoDetalhes
            titulo='Master'
            subTitulo='Simples Nacional'
            descricao='Master para Empresas de Comércio e/ou serviços no Simples Nacional: A solução completa para maximizar seus resultados'
            faturamentoLimite='4.8 milhões'
            socios='04'
            colaborador='10'
            contaBancaria='05'
            investimento={3036}
            servicos={[
              { nome: 'Departamento Pessoal', icone: Users },
              { nome: 'Escrituração Fiscal', icone: FileText },
              { nome: 'Contabilidade Anual', icone: ChartPie },
              { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
              {
                nome: 'Consultoria Mensal de 90 minutos \n ( não cumulativo )',
                icone: MessageCircleMore,
              },
            ]}
          />
        </TabsContent>
      </Tabs>

      <div className='my-6 w-[90%] sm:w-[90%] text-xs md:text-sm text-zinc-300 max-w-6xl mx-auto font-montRegular'>
        <p>
          <strong className='text-white font-montBold'>
            Serviços não inclusos no pacote:
          </strong>{' '}
          Reunião de consultoria até 60 minutos com parecer contábil por escrito
          + R$ 399,90; Reunião de consultoria até 60 minutos sem parecer
          contábil por escrito + R$ 199,90; Colaborador ou Sócio Extra + 49,90;
          Faturamento extra de até 20%; Aumento de 20% no valor do plano; Conta
          bancária extra + 119,90.
        </p>
      </div>
    </div>
  );
}
