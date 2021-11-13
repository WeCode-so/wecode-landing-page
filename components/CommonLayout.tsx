import React from "react";
import { useScrolled } from "../lib/util";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/wecode_1x.png";
import instagram from "../public/instagram.svg";
import purpleBall from "../public/big_purple_ball.png";
import { useRouter } from "next/dist/client/router";

const CommonLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-0 right-0" style={{ zIndex: -1 }}>
        <Image src={purpleBall} alt="WeCode" quality={100} />
      </div>
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
            <Image src={logo} alt="WeCode" />
          </a>
        </Link>
        <div className="flex-1" />
        <nav className="grid grid-flow-col gap-8 items-center">
          {HEADER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <a
                className={
                  "font-medium " +
                  (l.href === pathname ? "text-wgreen" : "text-white")
                }
              >
                {l.label}
              </a>
            </Link>
          ))}
          <Link href="/login">
            <a className="rounded-full p-2 px-6 bg-wpurple">Login</a>
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
        <Image src={logo} alt="WeCode" />
        <div className="grid grid-flow-col justify-center gap-4 mt-4">
          <Link href="https://instagram.com/wecode.oficial">
            <a className="block h-8 w-8" target="_blank" rel="noopener">
              <Image src={instagram} alt="Instagram" layout="responsive" />
            </a>
          </Link>
          <Link href="mailto:contato@wecode.so">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CommonLayout;
