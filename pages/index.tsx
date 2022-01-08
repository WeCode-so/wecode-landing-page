import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import CommonLayout from "../components/CommonLayout";
import Image from "next/image";
import teamImage from "../public/team.svg";
import {
  transform,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect } from "react";
import CircleCanvas from "../components/CircleCanvas";
import { useScrollY, useViewportHeight } from "../lib/util";
import NoSSR from "../components/NoSSR";

const Home: NextPage = () => {
  return (
    <CommonLayout noCircle>
      <Head>
        <title>WeCode: Construíremos juntos.</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderCircle />

        {/* Cursos */}
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8">
          <h2 className="text-4xl font-medium">
            Quais <span className="text-wgreen">cursos</span> oferecemos? 🤔
          </h2>
          <div className="grid grid-cols-3 w-full mt-8 gap-8">
            <div className="border p-2 py-6 rounded-md border-gray-600 bg-gray-900 text-xl">
              <span className="text-4xl block mb-4">💭</span>
              Lógica de programação
            </div>
            <div className="border p-2 py-6 rounded-md border-gray-600 bg-gray-900 text-xl">
              <span className="text-4xl block mb-4">👩‍💻</span>
              Linguagens de programação
            </div>
            <div className="border p-2 py-6 rounded-md border-gray-600 bg-gray-900 text-xl">
              <span className="text-4xl block mb-4">🪡</span>
              Matemática e UX/UI design
            </div>
          </div>
        </section>
        {/* Clubes */}
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8">
          <h2 className="text-4xl font-medium">
            Crie um <span className="text-wgreen">clube</span> e faça amigos 🤟
          </h2>
          <span className="mt-8">
            <Image src={teamImage} alt="" />
          </span>
          <p className="text-2xl max-w-4xl block text-center mt-12">
            Aprenda programação com os cursos WeCode, junte amigos e crie um
            clube on-line. Depois disso, tenha a possibilidade de competir em
            hackathons e maratonas com premiações exclusivas.
          </p>
          <Link href="/aprenda">
            <a className="py-4 px-8 bg-wpurple hover:bg-wpurpledarker rounded-full text-xl mt-10 font-medium">
              Crie um clube agora ➡️
            </a>
          </Link>
        </section>
      </main>
    </CommonLayout>
  );
};

const HeaderCircle = () => {
  const scrollY = useScrollY();
  const viewport = useViewportHeight();

  const completeness = scrollY / viewport / 1.5;

  return (
    <section className="header-section -mt-24">
      <div className="inner">
        <div className="absolute top-0 left-0 w-full h-screen z-10">
          <NoSSR>
            <CircleCanvas />
          </NoSSR>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center header">
          <section className="container text-center flex flex-col items-center px-4">
            <h1 className="text-5xl font-medium">
              <span className="text-wgreen">WeCode</span>{" "}
              <span className="italic">juntos.</span>
            </h1>
            <p className="text-3xl mt-6">A qualquer hora. Em qualquer lugar.</p>
            <div className="w-24 h-2 bg-wred mt-8" />
            <p className="text-2xl max-w-3xl block text-center mt-8">
              Aprenda programação e UX/UI design com cursos gratuitos baseados
              em projetos, crie seu clube, e ganhe premiações em hackathons e
              maratonas!
            </p>
            <Link href="/aprenda">
              <a className="py-3 px-8 bg-wpurple hover:bg-wpurpledarker rounded-full text-xl mt-8 font-medium">
                Saiba mais ➡️
              </a>
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
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: saturate(${180 * completeness}%)
            blur(${10 * completeness}px);
        }
      `}</style>
    </section>
  );
};

export default Home;
