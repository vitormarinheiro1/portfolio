import React from "react";

export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="relative text-blue-900 font-bold z-10">
                    <span className="mr-2 font-headline text-3xl font-bold">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Sou especializado em criar interfaces web intuitivas e dinâmicas.
                    Estudo Ciência da Computação e estou sempre atualizado com as últimas tendências e tecnologias, buscando aprimorar minhas
                    habilidades e entregar projetos de alta qualidade.
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
            </div>

            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full rounded-lg bg-gray-50 p-2">
                        <p className="font-handwriting text-lg font-bold">Olá,</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">
                                Vitor Marinheiro
                            </span>
                        </p>

                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a href="tel:+5511973179659" className="underline hover:text-blue-800">
                                            +55 (11) 97317-9659
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        E-mail:
                                    </td>
                                    <td>
                                        <a href="mailto:vitormarinheiro9@gmail.com" className="underline hover:text-blue-800" style={{ wordBreak: "break-word" }}>
                                            vitormarinheiro9@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Endereço:
                                    </td>
                                    <td>
                                        <a href="https://www.google.com/maps/place/Osasco,+SP/@-23.5347434,-46.8257732,13z/data=!3m1!4b1!4m6!3m5!1s0x94ceff085b9ef207:0xf21e27d4c824c4e!8m2!3d-23.5318198!4d-46.7916315!16s%2Fg%2F122n5xvw?entry=ttu"
                                            target="_blank"
                                            className="underline hover:text-blue-800"
                                        >
                                            Osasco, SP
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Disponível:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full
                                            bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(../src/components/About/assets/me.jpeg)] bg-cover bg-center md:-left-12 md:-top12 md:h-72 md:w-56"></div>
                </div>
            </div>
        </section>
    )
}

