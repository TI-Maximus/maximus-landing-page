import Footer from '@/app/components/footer';

export default function About() {
  const timelineEvents = [
    {
      year: '1973',
      description: 'Criação da Eldir Contabilidade por Elcias e Dídima',
    },
    {
      year: '1978',
      description:
        'Inicia das atividades Contábeis por João Costa - Consult Contabilidade',
    },
    {
      year: '2012',
      description:
        'Fusão e entrada de Eduardo e Samuel com a criação da Máximus Contabilidade',
    },
    {
      year: '2018',
      description: 'Criação do Protagonismo RH',
    },
    {
      year: '2019',
      description: 'Criação da Startup de Contabilidade Online - Otimizzei',
    },
    {
      year: '2019',
      description: 'Criação da filial de Rondon e Marabá - PA',
    },
    {
      year: '2023',
      description: 'Criação da GMSE Advocacia',
    },
    {
      year: '2024',
      description: 'Criação da modalidade On-line da Máximus: Maxline',
    },
    {
      year: '2024',
      description: 'Criação da Triad Consultoria',
    },
  ];

  return (
    <section className='w-layout space-y-20'>
      <div className='flex flex-col items-center my-10'>
        <div className='w-[95%] md:w-[90%] p-6 md:px-8 md:py-8 lg:px-10 lg:py-10 rounded-3xl space-y-2 md:space-y-4 lg:space-y-6 text-sm md:text-lg lg:text-xl text-black bg-white/95 text-justify'>
          <h1 className='text-[#02238E] text-2xl md:text-4xl lg:text-4xl font-medium'>
            Quem somos
          </h1>
          <p>
            O{' '}
            <span className='text-[#02238E]'>
              Grupo Máximus Soluções Empresariais
            </span>{' '}
            possui <span className='text-[#02238E]'>mais de 50 anos</span> de
            história, iniciando com a fusão dos escritórios Eldir e Consult
            Contabilidade.
          </p>
          <p>
            <span className='text-[#02238E]'>Somos experiência e inovação</span>
            , ultrapassando barreiras contábeis para trazer soluções
            empresariais e cumprir nossa missão: {''}
            <span className='text-[#02238E]'>
              Maximizar os resultados das empresas do Brasil.
            </span>
          </p>
        </div>
      </div>

      <div className='relative pl-8'>
        <svg
          className='absolute left-0 top-0 h-full w-8'
          viewBox='0 0 32 800'
          preserveAspectRatio='none'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 0C16 0 32 160 32 400C32 640 16 800 16 800'
            stroke='#00A3FF'
            strokeWidth='2'
          />
        </svg>

        <div className='space-y-8 bg-transparent my-10'>
          {timelineEvents.map((event, index) => (
            <div key={index} className='flex items-start gap-6'>
              <div className='relative'>
                <div className='absolute left-[-20px] w-[12px] h-[12px] rounded-full bg-[#00A3FF] mt-2 border-4 border-[#000B3C]' />
              </div>

              <div className='flex-1 -mt-1'>
                <div className='text-[#00A3FF] text-xl md:text-2xl font-bold mb-1'>
                  {event.year}
                </div>
                <div className='text-white text-sm md:text-lg'>
                  {event.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
