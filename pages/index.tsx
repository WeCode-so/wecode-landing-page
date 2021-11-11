import type { NextPage } from "next";
import CommonLayout from "../components/CommonLayout";

const Home: NextPage = () => {
  return (
    <CommonLayout>
      <main>
        {/* Header */}
        <section className="container mx-auto py-24 text-center flex flex-col items-center px-4">
          <h1 className="text-5xl font-medium">
            <span className="text-wgreen">WeCode</span>{" "}
            <span className="italic">juntos.</span>
          </h1>
          <h2 className="text-3xl mt-6">A qualquer hora. Em qualquer lugar.</h2>
          <div className="w-24 h-2 bg-wred mt-8" />
          <p className="text-2xl max-w-3xl block text-center mt-8">
            Aprenda programação e UX/UI design com cursos gratuitos baseados em
            projetos, crie seu clube, e ganhe premiações em hackathons e
            maratonas!
          </p>
        </section>
      </main>
    </CommonLayout>
  );
};

export default Home;
