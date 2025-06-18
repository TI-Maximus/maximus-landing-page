import PlanoDetalhes from '@/app/planos/_components/planoDetalhes';
import { ChartPie, FileText, Gavel, Users, Vibrate } from 'lucide-react';

export default function LucroPresumidoMaxiLine() {
  return (
    <div>
      <PlanoDetalhes
        titulo='Serviços'
        subTitulo='Lucro Presumido'
        descricao='Plano para Empresas de Serviço'
        faturamentoLimite='600 mil'
        socios='01'
        colaborador='02'
        contaBancaria='01'
        investimento={529.8}
        servicos={[
          { nome: 'Departamento Pessoal', icone: Users },
          { nome: 'Escrituração Fiscal', icone: FileText },
          { nome: 'Contabilidade Anual', icone: ChartPie },
          { nome: 'Tributação \n Justa e Precisa', icone: Gavel },
          { nome: 'Atendimento \n digital por App', icone: Vibrate },
        ]}
      />
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
