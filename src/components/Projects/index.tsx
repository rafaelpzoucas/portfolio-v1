import { ArrowSquareOut } from "phosphor-react";
import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";
import { Project } from "../Project";

export function Projects() {
    return(
        <div id="projects" className="relative">
            <BackgroundCircles 
                className="w-[150px] sm:w-[600px] h-[150px] sm:h-[600px] -translate-x-2/3 translate-y-1/4 rotate-180" 
            />

            <section className="flex flex-col gap-8">
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

                    <div className="flex flex-col items-start sm:grid sm:grid-cols-2 gap-4 sm:gap-8">
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
                    </div>
                </main>
            </section>

            <BackgroundCircles 
                className="bottom-0 right-0 rotate-90 w-2/3 max-w-md" 
            />
        </div>
    )
}