import { formatarNumero } from '@/app/components/formatterNumber';

interface Servico {
  nome: string;
  icone: React.ElementType;
}

interface PlanoDetalhesProps {
  titulo: string;
  subTitulo?: string;
  socios?: string;
  colaborador?: string;
  contaBancaria?: string;
  faturamentoLimite?: string;
  planoExclusivo?: boolean;

  descricao?: string;
  investimento: number;
  servicos: Servico[];
}

export default function PlanoDetalhes({
  titulo,
  subTitulo,
  socios,
  colaborador,
  contaBancaria,
  faturamentoLimite,
  planoExclusivo,

  descricao,
  investimento,
  servicos,
}: PlanoDetalhesProps) {
  return (
    <div className='mx-4'>
      <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1.5fr_2fr] px-4 sm:px-6 md:px-8 w-full md:max-w-7xl mx-auto border border-[#00238E] rounded-3xl'>
        {planoExclusivo === true ? (
          <article className='w-full py-6 px-2 space-y-20'>
            <div className='space-y-5'>
              <h1 className='text-white text-4xl sm:text-5xl font-semibold font-montBold'>
                {titulo}
              </h1>
              <h3 className='w-fit px-3.5 py-1.5 text-white text-center bg-[#00238E] text-sm font-medium rounded-3xl font-montRegular'>
                {subTitulo}
              </h3>
            </div>

            <div className='text-xl md:pb-0 text-zinc-200 text-center sm:text-start font-montRegular'>
              <span>
                Plano Exclusivo para Empresas de Comércio e/ou serviços no{' '}
                {subTitulo}.
              </span>
              <br />
              <br />
              <span>
                Todos os limites são personalizados de acordo com a demanda.
              </span>
            </div>
          </article>
        ) : (
          <article className='w-full py-6 px-2 space-y-14'>
            <div className='space-y-5'>
              <h1 className='text-white text-4xl sm:text-5xl font-semibold font-montBold'>
                {titulo}
              </h1>
              {subTitulo ? (
                <h3 className='w-fit px-3.5 py-1.5 text-white text-center bg-[#00238E] text-sm font-medium rounded-3xl font-montRegular'>
                  {subTitulo}
                </h3>
              ) : null}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 font-montRegular'>
              <div className='text-center px-2 py-4 lg:p-4 min-h-24 border border-[#0281d9] rounded-3xl flex flex-col items-center justify-between'>
                <h4 className='text-base text-white font-medium'>Sócios</h4>
                <span className='text-5xl font-montBlack bg-text-socios-planos'>
                  {socios}
                </span>
              </div>
              <div className='text-center px-2 py-4 lg:p-4 min-h-24 border border-[#0281d9] rounded-3xl flex flex-col items-center justify-between'>
                <h4 className='text-base text-white font-medium'>
                  Colaborador
                </h4>
                <span className='text-5xl font-extrabold font-montBlack bg-text-socios-planos'>
                  {colaborador}
                </span>
              </div>
              <div className='text-center px-2 py-4 lg:p-4 min-h-24 border border-[#0281d9] rounded-3xl flex items-center flex-col justify-between'>
                <h4 className='text-base text-white font-medium'>
                  Contas bancárias
                </h4>
                <span className='text-5xl font-extrabold font-montBlack bg-text-socios-planos'>
                  {contaBancaria}
                </span>
              </div>
            </div>

            <div className='p-6 border border-[#FF5468] rounded-3xl text-center'>
              <h2 className='text-sm md:text-base lg:text-xl text-[#FF5468] mb-2 font-montRegular'>
                Limite de Faturamento Anual
              </h2>
              <span className='text-4xl sm:text-5xl md:text-6xl text-[#FF5468] font-semibold font-montBlack'>
                {faturamentoLimite}
              </span>
            </div>
          </article>
        )}

        <article className='w-full h-auto lg:h-auto p-6 space-y-10'>
          <p className='p-4 md:p-8 text-white text-justify font-montRegular'>
            {descricao}
          </p>

          <div className='text-white w-full gap-4 font-montRegular place-content-center grid md:grid-rows-3 md:grid-flow-col'>
            {servicos.map((item, index) => {
              const Icon = item.icone;
              return (
                <div
                  key={index}
                  className='h-24 wf max-w-[18rem] flex items-center bg-[#000F3F] rounded-2xl'
                >
                  <div className='px-4 gap-4 flex justify-between items-center'>
                    <Icon className='text-blue-400 w-8 h-8' />
                    <span className='whitespace-pre-line'>{item.nome}</span>
                  </div>
                </div>
              );
            })}

            <div className='h-24 px-10 w-[288px] bg-[#000F3F] rounded-2xl flex items-center justify-center flex-col'>
              <p className='text-xl text-zinc-200 font-montSemiBold'>
                {planoExclusivo ? (
                  <p className='text-base'>Investimento a partir de</p>
                ) : (
                  'Investimento'
                )}
              </p>
              <span className='text-2xl text-[#0281d9] font-montBlack'>
                {formatarNumero(investimento)}
              </span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
