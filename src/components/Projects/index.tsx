import React from "react"
import { HiArrowTopRightOnSquare } from "react-icons/hi2"

import tarefasImage from "./assets/tarefas.png";
import cardapioImage from "./assets/cardapio.png";
import threadsImage from "./assets/threads.png";
import sorteadorImage from "./assets/sorteador.png";
import eplayImage from "./assets/eplay.png";


export default function Projects() {
  const projects = [
    {
      title: "Eplay",
      description: "Ecommerce Eplay",
      image: eplayImage,
      link: "https://ecommerce-eplay.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Tarefas+",
      description: "Organizar seus estudos e tarefas",
      image: tarefasImage,
      link: "https://projeto-tarefas-nextjs.vercel.app/",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Cardápio",
      description: "Restaurante em React e Sass",
      image: cardapioImage,
      link: "https://cardapio-zeta-snowy.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Sorteador de amigo secreto",
      description: "Projeto React com TDD",
      image: sorteadorImage,
      link: "https://sorteador-amigo-secreto-project.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Threads",
      description: "Projeto de Criação de Perfil no Threads",
      image: threadsImage,
      link: "https://projeto-threads-marinheiroz.vercel.app/",
      colSpan: "col-span-1",
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador fullstack.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}