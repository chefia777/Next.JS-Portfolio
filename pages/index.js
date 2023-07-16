import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from 'next/image';
import TechCard from "../components/TechCard";
import GradientCard from "../components/Gradient";


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const socialsRef = useRef();
  const homeRef = useRef();
  const techRef = useRef();
  

  // Handling Scroll
  const handleWorkScroll = () => {
    console.log(workRef.current.offsetTop)
    window.scrollTo({
      top: workRef.current.offsetTop-80,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHomeScroll = () => {
    window.scrollTo({
      top: homeRef.current.offsetTop-100,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop-80,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleTechScroll = () => {
    window.scrollTo({
      top: techRef.current.offsetTop-80,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, socialsRef.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative">
      <Cursor />
      <Head handleHomeScroll={handleHomeScroll}>
        <title>{data.name}</title>
      </Head>
      {/* This button should not go into production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5">
        </div>
      )}
      <GradientCard/>

      <div className="container mx-auto mb-10">
        <Header
          handleHomeScroll={handleHomeScroll}
          handleWorkScroll={handleWorkScroll}
          handleTechScroll={handleTechScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptp:mt-18 mt-8o home mb-10" ref={homeRef}>
          <div className="mt-5 m-auto first">
            <h1 
              ref={textOne}
              className="font-bold text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className=" font-bold text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>   
          </div>
          <span>
            <Image className="astronaut right-5"
                src="/images/astronaut.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
          </span>
          
        </div>
        <div ref={socialsRef} className="mb-10">
          <Socials className="justify-center socials "/>
        </div>
        <GradientCard/>
        <div className="mt-12 laptop:mt-30 p-2 laptop:p-0 justify-center text-2xl"  ref={workRef}>
          <h1 className="laptopl:text-4xl text-bold text-center mt-10 mb-10 font-bold titulo-secao">Meus projetos</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 mb-10 text-center ">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                img2={project.imageSrc2}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={techRef}>
        <GradientCard/>
        <div className="mt-12 laptop:mt-30 p-2 laptop:p-0 justify-center text-2xl" >
          <h1 className="laptopl:text-4xl text-bold text-center mt-10 mb-10 font-bold titulo-secao tech">Tecnologias</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-4 gap-4 mb-10  place-items-center tecnologias ">
            {data.technologies.map((technology) => (
              <TechCard className=""
                key={technology.id}
                img={technology.imageSrc}
                img2={technology.imageSrc2}
                name={technology.title}
                description=" "
                onClick={() => window.open(technology.url)}
              />
            ))}
          </div>
        </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
        <GradientCard/>
          <h1 className="tablet:m-10 text-2xl text-bold laptopl:text-4xl text-center font-bold titulo-secao">Sobre mim</h1>
          <p className="tablet:m-10 mt-5 text-xl laptop:text-2xl w-full p-10">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
        <GradientCard/>
      </div>
    </div>
  );
}
