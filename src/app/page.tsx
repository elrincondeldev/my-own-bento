import Image from "next/image";
import { BentoDemo } from "./Grid";
import { PromoCard, PromoGrid } from "./components/PromoCard";
import { InfoGrid, InfoCard } from "./components/InfoCard";
import { GithubAnimation } from "./components/GithubAnimation";
import { SetupBackground } from "./components/SetupBackground";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row m-auto items-center md:items-start md:gap-10 max-w-[1500px] md:p-10">
      <section className="text-black w-full p-5 md:p-0 md:w-3/12">
        <Image
          src="/profile.svg"
          alt="Logo"
          width={160}
          height={160}
          className="rounded-full mb-3"
        />
        <p className="text-4xl font-bold">Aquí Jose 👋🏻</p>
        <p className="text-lg">
          Desarrollador Frontend y creador de contenido.
        </p>
      </section>
      <section className="flex flex-col w-full p-5 md:p-0 md:w-9/12 gap-5">
        <section>
          <BentoDemo />
        </section>
        <PromoGrid>
          <PromoCard
            name="Plataforma para aprender inglés"
            className="col-span-3 lg:col-span-2"
            background={
              <section className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/immigo.png"
                  alt="Plataforma para aprender inglés"
                  className="w-full h-full object-cover"
                />
              </section>
            }
            Icon="/immigo_logo.png"
            description="Immigo"
            href="https://dev.immigo.io/?via=elrincondeldev"
            cta="Más información"
          />
          <PromoCard
            name="Mi GitHub"
            className="lg:hidden col-span-3 lg:col-span-3"
            background={
              <section className="absolute inset-0 flex items-center justify-center mb-24">
                <GithubAnimation />
              </section>
            }
            description="Todos mis proyectos"
            href="https://github.com/elrincondeldev"
            cta="Míralo aquí"
          ></PromoCard>
          <PromoCard
            className="lg:hidden col-span-3 lg:col-span-3"
            background={<SetupBackground />}
            href="https://amzn.eu/2fzStS7"
            cta="Más información"
          ></PromoCard>
          <InfoGrid>
            <InfoCard
              name="Mi GitHub"
              className="hidden lg:flex col-span-3 lg:col-span-3"
              background={
                <section className="absolute inset-0 flex items-center justify-center mb-24">
                  <GithubAnimation />
                </section>
              }
              description="Todos mis proyectos"
              href="https://github.com/elrincondeldev"
              cta="Míralo aquí"
            ></InfoCard>
            <InfoCard
              name="Mi setup"
              className="hidden lg:flex col-span-3 lg:col-span-3"
              background={<SetupBackground />}
              Icon="/youtube_icon.svg"
              description="Mi setup"
              href="https://amzn.eu/2fzStS7"
              cta="Más información"
            ></InfoCard>
          </InfoGrid>
        </PromoGrid>
      </section>
    </main>
  );
}
