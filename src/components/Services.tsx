import React from "react"
import {
  HiCommandLine,
  HiComputerDesktop,
  HiOutlinePhoto,
} from "react-icons/hi2"

export function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos com otimização no SEO.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description:
        "Desenvolvimento de sistemas e APIs REST com Python ou Laravel e Swagger.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "UI/UX",
      description: "Criação de protótipos de sites e sistemas no Figma.",
      icon: <HiOutlinePhoto className="h-12 w-12" />,
    },
  ]

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

        <p className="text-sm text-gray-600">
          Atendo diferentes tipos de serviços, do front-end ao back-end,
          com a melhor qualidade possível.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
