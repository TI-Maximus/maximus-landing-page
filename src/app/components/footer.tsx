import Image from 'next/image';
import logo_branca from '../../../public/logo-branca.png';
import logo_whatsapp_cinza from '../../../public/logo_whatsapp_cinza.svg';

import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className='container w-layout border-t border-gray-800 py-6 text-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16'>
        <div className='space-y-4 flex items-center'>
          <a href=''>
            <Image
              src={logo_branca}
              alt=''
              className='min-w-[200px] w-[50%] md:w-[70%] h-auto'
            />
          </a>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-6'>Contato</h3>
          <ul className='space-y-4'>
            <li>
              <a
                href='tel:(99) 3524-0770'
                className='flex items-center text-gray-400 hover:text-blue-400 transition-colors'
              >
                <Image
                  src={logo_whatsapp_cinza}
                  alt=''
                  className='w-5 h-5 mr-1 text-gray-400'
                />
                (99) 98444-8258
              </a>
              <a
                href='tel:(99) 3524-0770'
                className='flex items-center text-gray-400 hover:text-blue-400 transition-colors'
              >
                <Phone className='w-4 h-4 mr-2' />
                (99) 3524-0770
              </a>
            </li>
            <li>
              <a
                href='mailto:comercial@grupomse.com'
                className='flex items-center text-gray-400 hover:text-blue-400 transition-colors'
              >
                comercial@grupomse.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-6'>Endereço</h3>
          <div className='flex items-start text-gray-400'>
            <MapPin className='w-4 h-4 mr-2 mt-1 flex-shrink-0' />
            <p className='text-sm leading-relaxed'>
              Rua Coronel Manoel Bandeira, Nº 1986
              <br />
              Centro, Imperatriz-MA
              <br />
              CEP. 65900-010
            </p>
          </div>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-6'>Redes Sociais</h3>
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/maximuscontabilidade.itz'
              className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors'
              aria-label='Facebook'
              target='_blank'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='https://www.instagram.com/maximuscontabil'
              className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors'
              aria-label='Instagram'
              target='_blank'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='https://www.linkedin.com/company/maximus-contabilidade-ltda'
              className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors'
              aria-label='LinkedIn'
              target='_blank'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a
              href='https://www.youtube.com/@maximuscontabilidade2995'
              className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors'
              aria-label='Youtube'
              target='_blank'
            >
              <Youtube className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-800 py-6'>
        <p className='text-center text-sm text-white'>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
