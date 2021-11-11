import React from "react";
import { useScrolled } from "../lib/util";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/wecode_1x.png";
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
        <nav className="grid grid-flow-col gap-8">
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
            <a>Login</a>
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

export default CommonLayout;
