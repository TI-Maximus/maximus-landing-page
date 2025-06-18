import NavBar from '@/app/components/navbar/navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import {
  FontMontBlack,
  FontMontBold,
  FontMontExtraLight,
  FontMontLight,
  FontMontRegular,
  FontMontSemiBold,
} from '../../public/fonts';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Máximus Contabilidade',
  description:
    'Somos uma Empresa de terceirização de serviços de contabilidade, constituída por profissionais com larga experiência nas áreas em que atuamos: Contábil - Tributária - Fiscal e Trabalhista.',
  robots: 'follow, index',
  icons: {
    icon: [
      {
        url: "/favicon.ico", 
        href: "/favicon.ico", 
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={`${cn(
          'antialiased',
          poppins.variable,
          FontMontLight.variable,
          FontMontExtraLight.variable,
          FontMontRegular.variable,
          FontMontSemiBold.variable,
          FontMontBold.variable,
          FontMontBlack.variable,
        )} antialiased bg-gradient-to-br from-[#000F3F] via-[#02238E] to-[#000000] text-zinc-400 font-poppins `}
      >
        <NavBar />
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NND9W6XN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
