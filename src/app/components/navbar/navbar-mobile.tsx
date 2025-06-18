'use client';

import {
  ChevronDown,
  CircleUserRound,
  Home,
  UserPlus,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

//prettier-ignore
const navItems: NavItem[] = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Sobre Nós", href: "/about", icon: Users },
  { name: "Trabalhe Conosco", href: "https://protagonismorh.selecty.com.br/search?text=Maximus%20Contabilidade&location=", icon: UserPlus },
  { name: "Planos da Máximus", href: "/planos/planos-maximus", icon: CircleUserRound },
  { name: "Planos da MAXIline", href: "/planos/planos-maxiline", icon: CircleUserRound },
  { name: "Área do Clinte", href: "https://vip.acessorias.com/maximusapp", icon: CircleUserRound },
];

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => setMenuOpen(false);

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="cursor-pointer relative z-50 lg:hidden" ref={menuRef}>
      <button
        onClick={handleMenu}
        aria-label="Toggle menu"
        className="py-2 pl-4 pr-3 text-sm group bg-neutral-800/60 hover:bg-neutral-800/90 text-neutral-300 hover:text-neutral-200 transition-colors flex items-center justify-center gap-1.5 rounded-lg"
      >
        Menu
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${menuOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div
        className={`absolute right-0 mt-4 w-72 rounded-xl bg-neutral-900/85 shadow-200 backdrop-blur-sm border border-neutral-900 p-3 grid gap-2 
        transition-all duration-300 ease-in-out transform 
        ${
          menuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {navItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="group p-3 rounded-xl bg-neutral-950/70 flex items-center gap-3 transition-colors hover:bg-neutral-925/100"
          >
            <div className="mt-0.5 p-3 bg-neutral-900 text-neutral-300 rounded-xl">
              <item.icon size={16} />
            </div>
            <p className="font-rethink text-sm text-neutral-200 group-hover:text-neutral-100 transition-colors">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
