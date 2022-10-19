import { ArrowSquareOut } from "phosphor-react";
import { FaBootstrap, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";
import { Project } from "../Project";

export function Projects() {
    return(
        <div id="projects" className="relative">
            <BackgroundCircles 
                className="w-[150px] sm:w-[600px] h-[150px] sm:h-[600px] -translate-x-2/3 translate-y-1/4 rotate-180" 
            />

            <section className="flex flex-col gap-12">
                <SectionHeader.Root>
                    <SectionHeader.Title>
                        {"<Meus projetos>"}
                    </SectionHeader.Title>
                    <SectionHeader.Subtitle>
                        Meus principais projetos
                    </SectionHeader.Subtitle>
                </SectionHeader.Root>

                <main className="flex flex-col gap-4 sm:gap-8">
                    <Project.Root>
                        <Project.Image src="wm10-thumb.png" alt="Print da tela da landing page do WM10" />
                        <Project.Description>
                            <Project.DescriptionTitle>
                                ERP WM10
                            </Project.DescriptionTitle>
                            <Project.DescriptionText>
                                Redesign do site do WM10, realizado durante o período de estágio na empresa. Projeto desenvolvido com HTML, CSS, JS, Bootstrap e a biblioteca SplideJs para os carroséis. 
                            </Project.DescriptionText>
                        </Project.Description>
                        <Project.Footer>
                            <Project.FooterStacks>
                                <SiHtml5 title="HTML5" />
                                <SiCss3 title="CSS3" />
                                <SiJavascript title="JavaScript" />
                                <SiBootstrap title="Bootstrap" />
                            </Project.FooterStacks>

                            <div className="flex flex-row gap-2">
                                {/* <Project.FooterButton>
                                    <ArrowSquareOut size={24} />
                                    <span className="hidden sm:flex">
                                        Visitar
                                    </span> 
                                </Project.FooterButton> */}
                                <span className="text-zinc-400">Link em breve</span>
                            </div>

                        </Project.Footer>
                    </Project.Root>

                    <Project.Root>
                        <Project.Image src="ignitodo-thumb.png" alt="Print da tela do app Ignitodo" />
                        <Project.Description>
                            <Project.DescriptionTitle>
                                Ignitodo
                            </Project.DescriptionTitle>
                            <Project.DescriptionText>
                                Projeto criado para o desafio do Bootcamp Ignite. O desafio consistia em criar uma aplicação com React e Typescript, no qual seria possível criar tarefas, marcar as concluídas e com um resumo do progresso.
                            </Project.DescriptionText>
                        </Project.Description>
                        <Project.Footer>
                            <Project.FooterStacks>
                                <SiTypescript title="Typescript" />
                                <FaReact title="ReactJs" />
                                <SiTailwindcss title="Tailwindcss" />
                            </Project.FooterStacks>

                            <div className="flex flex-row gap-2">
                                <Project.FooterButton outlined link="https://github.com/rafaelpzoucas/ignitodo">
                                    <FaGithub className="text-2xl" />
                                    <span className="hidden sm:flex">
                                        Ver no GitHub
                                    </span>
                                </Project.FooterButton>
                                <Project.FooterButton link="https://ignitodo.vercel.app/">
                                    <ArrowSquareOut size={24} />
                                    <span className="hidden sm:flex">
                                        Visitar
                                    </span> 
                                </Project.FooterButton>
                            </div>

                        </Project.Footer>
                    </Project.Root>

                    <div className="flex flex-col items-center justify-center gap-8 m-auto mt-16">
                        <img src="comming-soon.svg" alt="Ilustração de planetas" />
                        <span className="text-cyan-400 text-2xl">
                            Mais projetos em breve...
                        </span>
                    </div>

                    {/* <div className="flex flex-col items-start sm:grid sm:grid-cols-2 gap-4 sm:gap-8">
                        <Project.Root>
                            <Project.Image src="https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png" alt="Teste" />
                            <Project.Description>
                                <Project.DescriptionTitle>
                                    Project name
                                </Project.DescriptionTitle>
                                <Project.DescriptionText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat.
                                </Project.DescriptionText>
                            </Project.Description>
                            <Project.Footer>
                                <Project.FooterStacks>
                                    <FaReact />
                                    <SiTailwindcss />
                                    <FaFigma />
                                </Project.FooterStacks>

                                <div className="flex flex-row gap-2">
                                    <Project.FooterButton outlined>
                                        <FaGithub className="text-2xl" />
                                        <span className="hidden sm:flex">
                                            Ver no GitHub
                                        </span>
                                    </Project.FooterButton>
                                    <Project.FooterButton >
                                        <ArrowSquareOut size={24} />
                                        <span className="hidden sm:flex">
                                            Ver em produção
                                        </span> 
                                    </Project.FooterButton>
                                </div>

                            </Project.Footer>
                        </Project.Root>

                        <Project.Root>
                            <Project.Image src="https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1.png" alt="Teste" />
                            <Project.Description>
                                <Project.DescriptionTitle>
                                    Project name
                                </Project.DescriptionTitle>
                                <Project.DescriptionText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat.
                                </Project.DescriptionText>
                            </Project.Description>
                            <Project.Footer>
                                <Project.FooterStacks>
                                    <FaReact />
                                    <SiTailwindcss />
                                    <FaFigma />
                                </Project.FooterStacks>

                                <div className="flex flex-row gap-2">
                                    <Project.FooterButton outlined>
                                        <FaGithub className="text-2xl" />
                                        <span className="hidden sm:flex">
                                            Ver no GitHub
                                        </span>
                                    </Project.FooterButton>
                                    <Project.FooterButton >
                                        <ArrowSquareOut size={24} />
                                        <span className="hidden sm:flex">
                                            Ver em produção
                                        </span> 
                                    </Project.FooterButton>
                                </div>

                            </Project.Footer>
                        </Project.Root>
                    </div> */}
                </main>
            </section>

            <BackgroundCircles 
                className="bottom-0 right-0 rotate-90 w-2/3 max-w-md" 
            />
        </div>
    )
}