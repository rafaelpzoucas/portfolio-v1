import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";

export function Contact() {
    return (
        <section className="flex flex-col gap-8">
            <SectionHeader.Root>
                <SectionHeader.Title>
                    {"<Bora trocar uma ideia>"}
                </SectionHeader.Title>
                <SectionHeader.Subtitle>
                    Onde você pode me encontrar
                </SectionHeader.Subtitle>
            </SectionHeader.Root>

            <main className="flex flex-col items-start sm:flex-row gap-8">
                <a href="#">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaLinkedin />
                        <span>Linkedin</span>
                    </div>
                    <span className="text-zinc-400">Meu perfil profissional</span>
                </a>
                <a href="#">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaGithub />
                        <span>GitHub</span>
                    </div>
                    <span className="text-zinc-400">Open source e estudo</span>
                </a>
                <a href="#">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaRegEnvelope />
                        <span>E-mail</span>
                    </div>
                    <span className="text-zinc-400">Para falar comigo</span>
                </a>
            </main>
        </section>
    )
}