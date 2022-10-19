import { SectionHeader } from "../atoms/SectionHeader";
import { Topic } from "./Topics";

export function AboutMe() {
    return(
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
                            meu nome é Rafael, sou desenvolvedor Front-end, com foco em Design de Interfaces e Experiência de Usuário (UX). Combinando meus conhecimentos de design e programação, consigo transformar ideias em interfaces profissionais e acessíveis para qualquer tipo de usuário. 
                        </Topic.Text>
                    </Topic.Content>
                </Topic.Root>
                
                <Topic.Root reverse>
                    <Topic.Image src="small-town.svg" alt="Ilustração de uma cidade pequena" />

                    <Topic.Content>
                        <Topic.Title>Sou de Assis,</Topic.Title>
                        <Topic.Text>
                            uma pequena cidade do interior de São Paulo. <br /> Conheci o desenvolvimento web aos 14 anos de idade quando realizei um curso de web design básico, foi onde tive meu primeiro contato com HTML e CSS.
                        </Topic.Text>
                    </Topic.Content>
                </Topic.Root>

                <Topic.Root>
                    <Topic.Image src="coding.svg" alt="Ilustração de uma pessoa aprendendo programação na sala de aula" />

                    <Topic.Content>
                        <Topic.Title>Aos 18 anos,</Topic.Title>
                        <Topic.Text>
                            após terminar o ensino médio, entrei para a faculdade de Análise e Desenvolvimento de Sistemas pela FEMA, onde aprendi mais a fundo sobre lógica de programação e aprendi minha primeira linguagem o famoso C++. Com o orçamento apertado, no início do último ano do curso, precisei trancar a matrícula. 
                        </Topic.Text>
                    </Topic.Content>
                </Topic.Root>

                <Topic.Root reverse>
                    <Topic.Image src="delivery.svg" alt="Ilustração de um entregador fazendo uma entrega" />

                    <Topic.Content>
                        <Topic.Title>Trabalhei como motoboy</Topic.Title>
                        <Topic.Text>
                            em uma lanchonete da cidade e percebi uma oportunidade para empreender, pois eu via como era difícil para o gerente conseguir entregadores. “E se tivesse uma empresa de motoboys?”
                        </Topic.Text>
                        <Topic.Text>
                            Na época não existia nenhum serviço desse tipo na cidade e resolvi arriscar. E em janeiro de 2019, nasce a Helix Delivery. Sem surpresa nenhuma, o projeto foi um sucesso e no nosso segundo ano aconteceu a pandemia (covid-19) o que alavancou ainda mais a empresa. 
                        </Topic.Text>
                        <Topic.Text>
                            Nosso atendimento era 100% manual e chegou um momento que precisei automatizar as coisas, então em 2021 voltei a estudar programação, entrei no bootcamp Ignite da Rocketseat, o que acelerou muito o meu aprendizado.
                        </Topic.Text>
                    </Topic.Content>
                </Topic.Root>

                <Topic.Root>
                    <Topic.Image src="programming.svg" alt="Ilustração de uma pessoa programando" />

                    <Topic.Content>
                        <Topic.Title>Hoje,</Topic.Title>
                        <Topic.Text>
                            corro atrás de um sonho, que é trabalhar com o que eu realmente amo fazer, criar design de interfaces, desenvolver sites e aplicações e ao mesmo tempo, através da programação, ajudar pessoas a realizarem seus objetivos, tornando o mundo um lugar melhor.
                        </Topic.Text>
                    </Topic.Content>
                </Topic.Root>
            </main>
        </section>
    )
}