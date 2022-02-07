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
  const [emailSent, setEmailSent] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const getClassForCard = (id: number) => {
    const pos = id - currentCard;
    const realPos = pos < 0 ? 3 + pos : pos;

    return `top-${realPos * 8} z-${30 - realPos * 10} scale-${
      100 - realPos * 5
    }`;
  };

  const handleMoveNext = () => {
    setCurrentCard((v) => (v + 1) % 3);
  };

  const handleMovePrevious = () => {
    setCurrentCard((v) => (v - 1 < 0 ? 3 + (v - 1) : v - 1));
  };

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

        {/* Sobre nós */}
        <div className=" bg-gradient-to-tr from-wpurple to-wpurpledarker border-t border-b border-zinc-800">
          <section
            className="container mx-auto py-24 text-center flex flex-col items-center px-4 "
            id="aprenda"
          >
            <div className="grid grid-cols-5 w-full mt-8 gap-8">
              <div className="col-span-2 flex items-center justify-center">
                <img src="/somos-como.png" alt="" className="w-full" />
              </div>
              <div className="col-span-3 h-full flex flex-col items-center">
                <button className="mb-6" onClick={handleMovePrevious}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
                <div className="flex flex-col relative flex-1">
                  <div
                    className={`p-4 border border-white border-opacity-20 rounded-md text-left bg-wpurple/30 absolute ${getClassForCard(
                      0
                    )} h-full transition-all flex flex-col items-center justify-center text-center shadow-md backdrop-blur-xl`}
                  >
                    <div className="text-4xl">📖</div>
                    <h3 className="text-medium text-xl mt-2">Nossa história</h3>
                    <p className="mt-4 text-justify mx-8">
                      Nós nascemos porque 5 jovens de diferentes estados e
                      realidades se uniram na maior competição de
                      empreendedorismo jovem do Brasil, e ganharam em 1º lugar o
                      Inova Jovem da UNICAMP. Nascemos também porque queremos
                      que mais gente como a gente descubra o seu propósito
                      através da tecnologia, e impacte vidas.
                    </p>
                  </div>

                  <div
                    className={`p-4 border border-white border-opacity-20 rounded-md text-left bg-wpurple/30 absolute ${getClassForCard(
                      1
                    )} h-full transition-all flex flex-col items-center justify-center text-center shadow-md backdrop-blur-xl`}
                  >
                    <div className="text-4xl">👩‍💻</div>
                    <h3 className="text-medium text-xl mt-2">
                      O que oferecemos
                    </h3>
                    <p className="mt-4 text-justify mx-8">
                      <ul>
                        <li>
                          <b>Cursos:</b> Calma que nossos cursos não são nem um
                          pouquinho chatos! Nossa metodologia é baseada em jogos
                          e projetos práticos. Você vai aprender passando por
                          perrengues - e vai rir de alívio depois que resolver
                          os problemas.
                        </li>
                        <li className="mt-4">
                          <b>Competições:</b> A gente sabe que assim como a
                          gente, você também se esforça muito pra fazer dar
                          certo. E queremos reconhecer isso, por isso temos
                          hackathons e maratonas para te oferecer premiações, e
                          te manter evoluindo na programação.
                        </li>
                        <li className="mt-4">
                          <b>Clubes:</b> Manter-se motivado é difícil demais,
                          né? Precisamos de um ombro amigo pra reclamar e também
                          pra evoluir junto. Por isso na WeCode você pode fazer
                          amigos e criar um clube on-line para desenvolver
                          projetos reais.
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div
                    className={`p-4 border border-white border-opacity-20 rounded-md text-left bg-wpurple/30 absolute ${getClassForCard(
                      2
                    )} h-full transition-all flex flex-col items-center justify-center text-center shadow-md backdrop-blur-xl`}
                  >
                    <div className="text-4xl">❤️</div>
                    <h3 className="text-medium text-xl mt-2">
                      Coloque seu coração em cada código
                    </h3>
                    <p className="mt-4 text-justify mx-8">
                      A gente acredita que codar é uma arte do coração. Em cada
                      linha, é preciso criatividade e sensibilidade para
                      solucionar problemas reais. Por isso aqui a gente se
                      preocupa não só com a parte técnica, mas também como você
                      aborda o processo criativo.
                    </p>
                  </div>

                  {/* Placeholder for calc height */}
                  <div className="p-4 border border-white border-opacity-20 rounded-md text-left bg-wpurple invisible">
                    <div className="text-4xl">👩‍💻</div>
                    <h3 className="text-medium text-xl mt-2">
                      O que oferecemos
                    </h3>
                    <p className="mt-4 mx-8">
                      <ul>
                        <li>
                          <b>Cursos:</b> Calma que nossos cursos não são nem um
                          pouquinho chatos! Nossa metodologia é baseada em jogos
                          e projetos práticos. Você vai aprender passando por
                          perrengues - e vai rir de alívio depois que resolver
                          os problemas.
                        </li>
                        <li className="mt-4">
                          <b>Competições:</b> A gente sabe que assim como a
                          gente, você também se esforça muito pra fazer dar
                          certo. E queremos reconhecer isso, por isso temos
                          hackathons e maratonas para te oferecer premiações, e
                          te manter evoluindo na programação.
                        </li>
                        <li className="mt-4">
                          <b>Clubes:</b> Manter-se motivado é difícil demais,
                          né? Precisamos de um ombro amigo pra reclamar e também
                          pra evoluir junto. Por isso na WeCode você pode fazer
                          amigos e criar um clube on-line para desenvolver
                          projetos reais.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <button className="mt-16" onClick={handleMoveNext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Cursos */}
        <div className="bg-zinc-900 border-t border-b border-zinc-800">
          <section
            className="container mx-auto py-24 text-center flex flex-col items-center px-4 "
            id="aprenda"
          >
            <div className="grid grid-cols-4 w-full mt-8 gap-8">
              <div className="text-6xl text-left">
                <span className="text-wgreen">Aprenda</span> com nossos cursos
                💪
              </div>
              <Card>
                <div className="flex flex-col p-4 items-center justify-center h-full">
                  <span className="text-4xl block mb-4">💭</span>
                  Lógica de programação
                </div>
              </Card>
              <Card>
                <div className="flex flex-col p-4 items-center justify-center h-full card-in">
                  <span className="text-4xl block mb-4">👩‍💻</span>
                  Linguagens de programação
                </div>
              </Card>
              <Card>
                <div className="flex flex-col p-4 items-center justify-center h-full">
                  <span className="text-4xl block mb-4">🎨</span>
                  UX/UI design
                </div>
              </Card>
            </div>
          </section>
        </div>

        {/* Clubes */}
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8">
          <h2 className="text-6xl font-medium">
            Crie um clube e <span className="text-wgreen">faça</span>{" "}
            <span className="inline-block text-wgreen">
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
          <span className="mt-1">
            <img src="/clube-power.png" alt="" className="h-96" />
          </span>
          <p className="text-2xl max-w-4xl block text-center mt-12">
            <b>Aprenda programação</b> com nossos cursos, junte amigos e{" "}
            <b>crie um clube on-line</b>. Depois disso, <b>dispute prêmios</b>{" "}
            em aventuras competitivas!
          </p>
          <Link href="/aprenda">
            <a className="btn-primary btn-lg mt-12">Criar clube agora ⚔️👉</a>
          </Link>
        </section>

        {/* <section className="container mx-auto py-24 text-center mt-8 px-8">
          <h2 className="text-6xl font-medium">
            O que dizem da <span className="text-wgreen">WeCode</span>? 🤔
          </h2>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <BlackCard>
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
            </BlackCard>
            <BlackCard>
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
            </BlackCard>
            <BlackCard>
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
            </BlackCard>
          </div>
        </section> */}

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

        <div className="bg-wpurple border-t border-b border-zinc-800 relative">
          <img
            src="/left-circle.png"
            alt=""
            className="absolute top-0 left-0 z-0 opacity-10 bottom-0 h-full"
          />
          <section className="container mx-auto py-24 pt-12 text-center mt-8 px-8 flex flex-col justify-center items-end z-10 relative">
            <h2 className="text-5xl font-medium">
              Receba dicas de programação
            </h2>
            <p className="text-2xl  block text-center mt-12">
              ...através da nossa newsletter feita ao som de Pink Floyd 🎶✨
            </p>
            {
              <div className="mt-12">
                <input
                  type="text"
                  placeholder="Seu e-mail..."
                  className="p-3 w-96 rounded-md text-black"
                />
                <button className="btn-secondary btn-lg ml-4">
                  Me deixe por dentro! 🤙
                </button>
              </div>
            }
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
              <a className="btn-primary btn-lg mt-8">Descubra agora 🗺️👇</a>
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
            "linear-gradient(rgb(24, 24, 27), rgb(24, 24, 27), rgba(24, 24, 27, 0), rgb(24, 24, 27), rgb(24, 24, 27))",
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
      <div className="bg-zinc-900 transition hover:bg-wpurple w-full h-full rounded-xl z-20 relative">
        {children}
      </div>
      <style jsx>{`
        .outer {
          padding: 1px;
        }

        .hider {
          background: rgb(24, 24, 27);
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

const PurpleCard = ({ children }: { children: React.ReactNode }) => {
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
            "linear-gradient(rgb(253, 81, 55), rgb(253, 81, 55), rgba(253, 81, 55, 0), rgb(253, 81, 53), rgb(253, 81, 55))",
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
      <div className="bg-wpurple transition hover:bg-wpurple w-full h-full rounded-xl z-20 relative">
        {children}
      </div>
      <style jsx>{`
        .outer {
          padding: 1px;
        }

        .hider {
          background: #5a32e9;
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
