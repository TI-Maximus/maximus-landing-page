import Image from 'next/image';
import Link from 'next/link';
import escritorio_de_contabilidade_mobile from '../../../../public/escritorio-de-contabilidade-mobile.png';
import escritorio_de_contabilidade_tablet from '../../../../public/escritorio-de-contabilidade-tablet.png';
import escritorio_de_contabilidade from '../../../../public/escritorio-de-contabilidade.png';
import iconZap from '../../../../public/icon-ok.png';
import Script from 'next/script';

export function Header() {
  return (
    <header className="relative w-full overflow-hidden max-w-[1920px] mx-auto">
      <div className="relative w-full">
        <picture>
          <source
            media="(max-width: 500px)"
            srcSet={escritorio_de_contabilidade_mobile.src}
          />
          <source
            media="(max-width: 1023px)"
            srcSet={escritorio_de_contabilidade_tablet.src}
          />
          <Image
            src={escritorio_de_contabilidade}
            alt="Banner Contabilidade"
            quality={100}
            priority
            className="w-full h-auto"
          />
        </picture>

    
        <div className="
          absolute 
          bottom-[5%] left-[50%] translate-x-[-50%] 
          md:bottom-[5%] md:left-[50%] md:translate-x-[-50%]
          lg:bottom-[32%] lg:left-[10%] lg:translate-x-0 
          z-10
        ">
          <Link
            href="https://wa.me/5599984448258?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center 
              bg-white text-[#02238E] font-medium 
              text-xs sm:text-sm lg:text-base 
              px-3 py-2 sm:px-4 sm:py-2.5 
              rounded-full shadow-lg 
              hover:brightness-95 transition 
              w-[220px] h-[42px] sm:w-[280px] sm:h-[50px] lg:w-auto lg:h-auto
            "
          >
            <span className="
              bg-[#02238E] rounded-full 
              w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] 
              flex items-center justify-center mr-2
            ">
              <Image
                src={iconZap}
                alt="Ícone Check"
                width={14}
                height={14}
                className="object-contain"
              />
            </span>
            Fale com um especialista
          </Link>
        </div>
      </div>

      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NND9W6XN');
        `}
      </Script>
    </header>
  );
}
