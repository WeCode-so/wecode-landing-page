import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import CommonLayout from "../components/CommonLayout";
import React from "react";
import CircleCanvas from "../components/CircleCanvas";
import NoSSR from "../components/NoSSR";
import dynamic from "next/dynamic";

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
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4 mt-8">
          <h2 className="text-4xl font-medium">
            <span className="text-wgreen">Aprenda</span> com nossos cursos 💪
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
            <span className="text-wgreen">Crie</span> um clube e faça amigos 🤟
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
            <a className="btn-primary btn-lg mt-12">Crie um clube agora 🤙</a>
          </Link>
        </section>
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12"
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
            <Link href="/aprenda">
              <a className="btn-primary btn-lg mt-8">Dá uma olhada 👇</a>
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

export default Home;
