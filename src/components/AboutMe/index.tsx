import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";
import { Topic } from "./Topics";

export function AboutMe() {
    return(
        <div className="relative">
            <BackgroundCircles 
                className="w-[150px] sm:w-[600px] h-[150px] sm:h-[600px] -translate-x-2/3 translate-y-1/4" 
            />

            <section id="about" className="flex flex-col gap-12">
            <SectionHeader.Root>
                    <SectionHeader.Title>
                        {"<Sobre mim>"}
                    </SectionHeader.Title>
                    <SectionHeader.Subtitle>
                        Um pouco da minha história
                    </SectionHeader.Subtitle>
                </SectionHeader.Root>

                <main className="flex flex-col gap-16">
                    <Topic.Root>
                        <Topic.Image src="https://github.com/rafaelpzoucas.png" alt="Minha foto" className="w-48 h-48 rounded-2xl rounded-br-none" />

                        <Topic.Content>
                            <Topic.Title>Olá,</Topic.Title>
                            <Topic.Text>
                                meu nome é Rafael, sou desenvolvedor Front-end apaixonado por Design de Interfaces e Experiência de Usuário (UX). Com minha combinação de habilidades em design e programação, sou capaz de transformar ideias em interfaces profissionais e acessíveis para todos os tipos de usuário. 
                            </Topic.Text>
                        </Topic.Content>
                    </Topic.Root>
                    
                    <Topic.Root reverse>
                        <Topic.Image src="small-town.svg" alt="Ilustração de uma cidade pequena" />

                        <Topic.Content>
                            <Topic.Title>Meus primeiros passos</Topic.Title>
                            <Topic.Text>
                                no mundo da programação começaram quando eu era adolescente, aos 14 anos, com um curso básico de web design. Desde então, continuei evoluindo meus conhecimentos, estudando Análise e Desenvolvimento de Sistemas na FEMA e aprendendo minha primeira linguagem de programação, C++.
                            </Topic.Text>
                        </Topic.Content>
                    </Topic.Root>

                    <Topic.Root>
                        <Topic.Image src="delivery.svg" alt="Ilustração de um entregador fazendo uma entrega" />

                        <Topic.Content>
                            <Topic.Title>Em meio aos desafios financeiros,</Topic.Title>
                            <Topic.Text>
                                tive que trancar a faculdade e trabalhar como motoboy em uma lanchonete local. Foi aí que tive a oportunidade de empreender, fundando a empresa Helix Delivery em janeiro de 2019. Com o sucesso da empresa, tive que automatizar seus processos, o que me levou de volta a estudar programação em 2021 através do bootcamp Ignite da Rocketseat.
                            </Topic.Text>
                        </Topic.Content>
                    </Topic.Root>

                    <Topic.Root reverse>
                        <Topic.Image src="programming.svg" alt="Ilustração de uma pessoa programando" />

                        <Topic.Content>
                            <Topic.Title>Hoje,</Topic.Title>
                            <Topic.Text>
                                busco realizar meu sonho de trabalhar com o que eu amo: criar design de interfaces, desenvolver sites e aplicativos e ajudar pessoas a alcançar seus objetivos, tornando o mundo um lugar melhor. Estou animado para continuar aprendendo e evoluindo em minha carreira.
                            </Topic.Text>
                        </Topic.Content>
                    </Topic.Root>
                </main>
            </section>

            <BackgroundCircles 
                className="bottom-0 right-0 rotate-180 w-2/3 max-w-md" 
            />
        </div>
    )
}