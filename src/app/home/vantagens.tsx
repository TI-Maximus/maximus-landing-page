'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import { ArrowRight, BarChart, Cpu, MessageSquare, Users } from 'lucide-react';
import { motion } from 'motion/react';

const info = [
  {
    icon: <Users className='h-12 w-12 text-blue-600' />,
    title: 'Troca de contador sem dor de cabeça',
    description: 'Cuidamos de tudo para você.',
  },
  {
    icon: <BarChart className='h-12 w-12 text-blue-600' />,
    title: 'Automação e tecnologia',
    description: ' Processos contábeis rápidos e sem papelada.',
  },
  {
    icon: <Cpu className='h-12 w-12 text-blue-600' />,
    title: 'Consultoria estratégica',
    description: 'Mais do que números, ajudamos sua empresa a crescer.',
  },
  {
    icon: <MessageSquare className='h-12 w-12 text-blue-600' />,
    title: 'Atendimento próximo e humanizado',
    description: 'Nada de respostas automáticas ou falta de retorno.',
  },
];

export function Vantagens() {
  return (
    <section className='py-16 '>
      <h2 className='container mb-12 mx-auto p-4 text-white text-center text-3xl font-bold'>
        Por que escolher a Máximus?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {info.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col md:flex-row items-center'
          >
            <Card className='text-center py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 w-[80%] md:w-full h-full'>
              <CardContent className='flex flex-col h-full justify-between'>
                <div>
                  <div className=' flex justify-center mb-4'>{item.icon}</div>
                  <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
                <a
                  href='https://wa.me/5599984448258?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20site!'
                  target='_blank'
                  className='mt-4 text-blue-600 hover:text-blue-800 flex justify-center items-center hover:underline'
                >
                  Fale com um Especialista
                  <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
