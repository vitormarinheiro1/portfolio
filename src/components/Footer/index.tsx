import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="h-full text-gray-300 p-4 bg-gray-900 text-center">
            <ul className="flex justify-center w-1/10 mx-auto my-4 gap-2">
                <li className="list-none gap-2 hover:text-white">
                    <a href="https://br.linkedin.com/in/vitor-marinheiro-590a461ba" target="_blank"><FaLinkedin size={20} /></a>
                </li>
                <li className="list-none gap-2 hover:text-white">
                    <a href="https://github.com/vitormarinheiro1" target="_blank"><FaGithub size={20} /></a>
                </li>
            </ul>
            <p className="mb-3 text-sm font-headline font-semibold">© 2024 Desenvolvido por Vitor Marinheiro | Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer