import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import CommonLayout from "../components/CommonLayout";
import React, { useEffect, useRef, useState } from "react";
import CircleCanvas from "../components/CircleCanvas";
import NoSSR from "../components/NoSSR";
import dynamic from "next/dynamic";
import {
  motion,
  useMotionTemplate,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { getCoords, useViewportHeight } from "../lib/util";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <CommonLayout noCircle>
      <Head>
        <title>
          WeCode | Descubra o mundo da tecnologia com as suas próprias mãos
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderCircle />

        {/* Cursos */}
        <section
          className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8"
          id="aprenda"
        >
          <div className="grid grid-cols-4 w-full mt-8 gap-8">
            <div className="text-6xl text-left">
              <span className="text-wgreen">Aprenda</span> com nossos cursos 💪
            </div>
            <Card>
              <div className="flex flex-col p-4 items-center justify-center h-full">
                <span className="text-4xl block mb-4">💭</span>
                Lógica de programação
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col p-4 items-center justify-center h-full card-in">
                <span className="text-4xl block mb-4">👩‍💻</span>
                Linguagens de programação
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-6 arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col p-4 items-center justify-center h-full">
                <span className="text-4xl block mb-4">🎨</span>
                UX/UI design
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
          </div>
        </section>

        {/* Clubes */}
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8">
          <h2 className="text-6xl font-medium">
            <span className="text-wgreen">Crie</span> um clube e faça{" "}
            <span className="inline-block">
              <Typewriter
                onInit={() => {}}
                options={{
                  strings: ["amigos", "código", "história"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                }}
              />
            </span>{" "}
            🤟
          </h2>
          <span className="mt-8">
            <img src="/clube-power.png" alt="" className="h-96" />
          </span>
          <p className="text-2xl max-w-4xl block text-center mt-12">
            Aprenda programação com os cursos WeCode, junte amigos e crie um
            clube on-line. Depois disso, tenha a possibilidade de competir em
            hackathons e maratonas com premiações exclusivas.
          </p>
          <Link href="/aprenda">
            <a className="btn-primary btn-lg mt-12">Criar clube ⚔️👉</a>
          </Link>
        </section>

        <section className="container mx-auto py-24 text-center mt-8 px-8">
          <h2 className="text-6xl font-medium">
            O que dizem da <span className="text-wgreen">WeCode</span>? 🤔
          </h2>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <Card>
              <div className="p-8 py-16 text-center flex flex-col items-center">
                <img
                  src="/headshots/lulu.png"
                  alt=""
                  className="rounded-full h-36 border-2 border-wgreen"
                />
                <p className="mt-8 text-2xl">Luísa Manoela</p>
                <p className="mt-4 text-2xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                <p className="mt-8 italic">
                  &ldquo;Totalmente satisfeita! Os cursos são excelentes, e
                  muito bem-feitos. É realmente um Khan Academy da
                  programação!&rdquo;
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-8 py-16 text-center flex flex-col items-center">
                <img
                  src="/headshots/pedro.png"
                  alt=""
                  className="rounded-full h-36 border-2 border-wgreen"
                />
                <p className="mt-8 text-2xl">Pedro Oliveira</p>
                <p className="mt-4 text-2xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                <p className="mt-8 italic">
                  &ldquo;Eu fiquei encantado quando vi a plataforma: do design
                  ao conteúdo, tudo é realmente muito perfeito! Amo a
                  WeCode.&rdquo;
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-8 py-16 text-center flex flex-col items-center">
                <img
                  src="/headshots/kaka.png"
                  alt=""
                  className="rounded-full h-36 border-2 border-wgreen"
                />
                <p className="mt-8 text-2xl">Kauã Victor</p>
                <p className="mt-4 text-2xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                <p className="mt-8 italic">
                  &ldquo;A qualidade dos cursos é surreal, e poder criar um
                  clube de programação é muito motivador!&rdquo;
                </p>
              </div>
            </Card>
          </div>
        </section>

        <div className="bg-zinc-900 border-t border-b border-zinc-800">
          <section className="container mx-auto py-24 pt-12 text-center mt-8 px-8 ">
            <img
              src="/final-memojis.png"
              alt=""
              className="h-96 inline-block"
            />
            <h2 className="text-5xl font-medium mt-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wpurple to-wred inline-block">
                Tá esperando o quê pra começar?
              </span>{" "}
              😝
            </h2>
            <p className="text-2xl  block text-center mt-12">
              Desvende o fantástico mundo da programação e do UX/UI design agora
              mesmo, e se divirta na maior aventura da sua vida.
            </p>
            <button className="btn-primary btn-lg mt-16">
              Começar aventura 🧙🏻‍♂️👉
            </button>
          </section>
        </div>
        <style jsx>{`
          .card-in:hover .arrow {
            opacity: 1;
          }
        `}</style>
      </main>
    </CommonLayout>
  );
};

const HeaderCircle = () => {
  return (
    <section className="header-section -mt-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="inner">
        <div className="absolute top-0 left-0 w-full h-screen z-10">
          <NoSSR>
            <CircleCanvas />
          </NoSSR>
        </div>
        <img
          src="/hero-radial.png"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-full w-full max-h-screen max-w-screen"
        />
        <div className="absolute top-0 left-0 w-full h-screen z-30 flex items-center justify-center header">
          <section className="container text-center flex flex-col items-center px-4">
            <img src="/code-hero.png" alt="" className="h-64" />

            <h1 className="text-6xl font-medium">
              <span className="text-wgreen">WeCode</span>{" "}
              <span className="italic inline-block">
                <Typewriter
                  onInit={() => {}}
                  options={{
                    strings: ["juntos.", "agora.", "onde quiser."],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                  }}
                />
              </span>
            </h1>

            <p className="text-2xl max-w-3xl block text-center mt-8">
              Descubra o mundo da programação e do UX/UI design com&nbsp;as suas
              próprias mãos
            </p>
            <Link href="#aprenda">
              <a className="btn-primary btn-lg mt-8">Explorar 🗺️👇</a>
            </Link>
          </section>
        </div>
      </div>
      <style jsx>{`
        .header-section {
          width: 100%;
          height: 200vh;
        }

        .inner {
          width: 100%;
          height: 100vh;
          position: sticky;
          top: 0;
        }

        .header {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  const [startPos, setStartPos] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const { scrollY } = useViewportScroll();
  const viewportSize = useViewportHeight();

  const scale = useTransform(
    scrollY,
    [
      startPos - viewportSize - cardHeight,
      startPos + viewportSize - cardHeight,
    ],
    [0, 100]
  );
  const position = useMotionTemplate`${scale}%`;

  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      const pos = getCoords(btnRef.current);
      const rect = btnRef.current.getBoundingClientRect();

      setStartPos(pos.top);
      setCardHeight(rect.height);
    }
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-wpurple  to-wred rounded-xl relative outer transition transform hover:scale-105 hover:rotate-3"
      ref={btnRef}
    >
      <motion.div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background:
            "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0))",
          backgroundSize: "200% 200%",
          backgroundPositionY: position,
        }}
      ></motion.div>
      <motion.div
        className="absolute w-full h-full to-red z-10 top-0 left-0 rounded-xl"
        style={{
          background:
            "linear-gradient(rgb(32, 32, 49), rgb(32, 32, 49), rgba(0, 0, 0, 0), rgb(32, 32, 49), rgb(32, 32, 49))",
          backgroundSize: "200% 200%",
          backgroundPositionY: position,
        }}
      ></motion.div>
      <div className="hider rounded-xl"></div>
      <div className="bg-black transition hover:bg-wpurple w-full h-full rounded-xl z-20 relative">
        {children}
      </div>
      <style jsx>{`
        .outer {
          padding: 1px;
        }

        .hider {
          background: #000000;
          z-index: 20;
          position: absolute;
          top: 1px;
          left: 1px;
          right: 1px;
          bottom: 1px;
        }
      `}</style>
    </div>
  );
};

export default Home;
