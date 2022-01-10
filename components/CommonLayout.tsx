import React from "react";
import { useScrolled } from "../lib/util";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/wecode.png";
import instagram from "../public/instagram.svg";
import purpleBall from "../public/big_purple_ball.png";
import { useRouter } from "next/dist/client/router";

const CommonLayout: React.FC<
  React.PropsWithChildren<{ noCircle?: boolean }>
> = ({ children, noCircle }) => {
  return (
    <div className="relative">
      <Header />
      {!noCircle && (
        <div className="absolute top-0 right-0" style={{ zIndex: -1 }}>
          <Image src={purpleBall} alt="WeCode" quality={100} />
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre nós",
    href: "/sobre",
  },
  {
    label: "Aprenda",
    href: "/aprenda",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];

const Header: React.FC<{}> = ({}) => {
  const scrolled = useScrolled();
  const { pathname } = useRouter();

  return (
    <div
      className={
        "h-24 sticky top-0 z-30 border-b border-white border-opacity-0 px-4 " +
        (scrolled ? "header border-opacity-10" : "")
      }
    >
      <div className="container mx-auto flex flex-row items-center h-full">
        <Link href="/">
          <a>
            <Image src={logo} alt="WeCode" height={36} width={134} />
          </a>
        </Link>
        <div className="flex-1" />
        <nav className="grid grid-flow-col gap-8 items-center">
          {HEADER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <a
                className={
                  "font-medium hover:text-wgreen hover:opacity-100 " +
                  (l.href === pathname
                    ? "text-wgreen"
                    : "text-white opacity-60")
                }
              >
                {l.label}
              </a>
            </Link>
          ))}
          <Link href="/login">
            <a className="btn-secondary btn-md">🔑 Login</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .header {
          backdrop-filter: saturate(180%) blur(10px);
        }
      `}</style>
    </div>
  );
};

const Footer: React.FC<{}> = () => {
  return (
    <footer className=" border-t border-gray-900">
      <div className="container mx-auto py-8 text-center">
        <Image src={logo} alt="WeCode" height={36} width={134} />
        <div className="grid grid-flow-col justify-center gap-4 mt-4">
          <Link href="https://instagram.com/wecode.oficial">
            <a
              target="_blank"
              rel="noopener"
              className="text-white hover:text-wgreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </Link>
          <Link href="mailto:contato@wecode.so">
            <a className="text-white hover:text-wgreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col justify-center gap-4 mt-4"></div>
        <p className="text-zinc-500 mt-8">
          Feito com 💚 e Coca-Cola, ao som de Lorde, por Luísa e Kayky
        </p>
      </div>
    </footer>
  );
};

export default CommonLayout;
