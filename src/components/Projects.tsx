import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";

import tarefasImage from "../assets/projects/tarefas.png";
import fswBarberImage from "../assets/projects/fswbarber.png";
import eplayImage from "../assets/projects/eplay.png";
import plannerImage from "../assets/projects/planner.png";
import vitorhelpdeskImage from "../assets/projects/vitorhelpdesk.png";

export default function Projects() {
  const projects = [
    {
      title: "FSW Barber",
      description: "Sistema de Barbearia",
      image: fswBarberImage,
      linkProject: "https://fsw-barber-vitor.vercel.app/",
      linkGithub: "https://github.com/vitormarinheiro1/fsw-barber",
      colSpan: "col-span-1",
    },
    {
      title: "Plann.er",
      description: "Agendamento de viagens",
      image: plannerImage,
      linkProject: "https://projetoplanner-react.vercel.app/",
      linkGithub: "https://github.com/vitormarinheiro1/Plann.er",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Vitor HelpDesk",
      description: "Sistema de Abertura de chamados",
      image: vitorhelpdeskImage,
      linkProject: "https://vitorhelpdesk.vercel.app/",
      linkGithub: "https://github.com/vitormarinheiro1/VitorHelpDesk",
      colSpan: "col-span-1",
    },
    {
      title: "Eplay",
      description: "Ecommerce Eplay",
      image: eplayImage,
      linkProject: "https://ecommerce-eplay.vercel.app/",
      linkGithub: "https://github.com/vitormarinheiro1/Ecommerce-eplay",
      colSpan: "col-span-1",
    },
    {
      title: "Tarefas+",
      description: "Organizar seus estudos e tarefas",
      image: tarefasImage,
      linkProject: "https://projeto-tarefas-nextjs.vercel.app/",
      linkGithub: "https://github.com/vitormarinheiro1/tarefas",
      colSpan: "col-span-1",
    },
  ];

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
              Aqui estão alguns projetos pessoais que desenvolvi ao longo da minha trajetória como programador.
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
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex gap-2">
                    <a href={project.linkProject} target="_blank">
                      <HiArrowTopRightOnSquare className="h-6 w-6" />
                    </a>
                    <a href={project.linkGithub} target="_blank">
                      <FaCode className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  );
}
