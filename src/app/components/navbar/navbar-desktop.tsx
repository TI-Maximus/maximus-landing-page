import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/app/components/ui/navigation-menu';
import Link from 'next/link';

const links = [
  { nome: 'Inicio', href: '/', target: '_self' },
  { nome: ' Sobre nós', href: '/about', target: '_self' },
  {
    nome: 'Trabalhe Conosco',
    href: 'https://protagonismorh.selecty.com.br/search?text=Maximus%20Contabilidade&location=',
    target: '_blank',
  },
];

export default function NavBarDesktop() {
  return (
    <ul className='space-x-6 lg:text-sm xl:text-base lg:flex items-center hidden'>
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className='hover:text-zinc-900 py-1.5 px-2 hover:bg-accent/50 bg-transparent rounded-md hover:transition ease-in-out duration-150 '
          target={item.target}
        >
          {item.nome}
        </Link>
      ))}

      <li>
        <NavigationMenu delayDuration={0}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent hover:bg-transparent lg:text-sm xl:text-base font-normal'>
                Planos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <ul className='gap-3 p-2 w-[230px]'>
                    <li className='p-2 hover:bg-zinc-300 rounded-sm'>
                      <a
                        href='/planos/planos-maximus'
                        className='text-base leading-none'
                      >
                        Planos da Máximus
                        <span className='line-clamp-3 text-xs leading-snug text-muted-foreground'>
                          Contabilidade Personalizada
                        </span>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <ul className='gap-3 p-2 w-[230px]'>
                    <li className='p-2 hover:bg-zinc-300 rounded-sm'>
                      <a
                        href='/planos/planos-maxiline'
                        className='text-base leading-none'
                      >
                        Planos MAXILine
                        <span className='line-clamp-3 text-xs leading-snug text-muted-foreground'>
                          Contabilidade Digital
                        </span>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent hover:bg-transparent lg:text-sm xl:text-base font-normal'>
                Área do cliente
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <ul className='gap-3 p-2 w-[230px]'>
                    <li className='p-2 hover:bg-zinc-300 rounded-sm'>
                      <a
                        href='https://vip.acessorias.com/maximusapp'
                        target='_blank'
                        className='text-base leading-none'
                      >
                        App Máximus
                        <span className='line-clamp-3 text-xs leading-snug text-muted-foreground'>
                          Acesse suas guias de imposto com facilidade
                        </span>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </li>
    </ul>
  );
}
