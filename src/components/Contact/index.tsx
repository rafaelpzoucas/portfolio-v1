import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";

export function Contact() {
    return (
        <section id="getInTouch" className="flex flex-col gap-12">
            <SectionHeader.Root>
                <SectionHeader.Title>
                    {"<Bora trocar uma ideia>"}
                </SectionHeader.Title>
                <SectionHeader.Subtitle>
                    Onde você pode me encontrar
                </SectionHeader.Subtitle>
            </SectionHeader.Root>

            <main className="flex flex-col items-start sm:flex-row gap-8">
                <a href="https://linkedin.com/in/rafaelpzoucas/" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaLinkedin />
                        <span>Linkedin</span>
                    </div>
                    <span className="text-zinc-400">Meu perfil profissional</span>
                </a>
                <a href="https://github.com/rafaelpzoucas" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaGithub />
                        <span>GitHub</span>
                    </div>
                    <span className="text-zinc-400">Open source e estudo</span>
                </a>
                <a href="mailto:rafaelpzoucas@gmail.com" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaRegEnvelope />
                        <span>E-mail</span>
                    </div>
                    <span className="text-zinc-400">Para falar comigo</span>
                </a>
                <a href="https://wa.me/5518998261736" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-row items-center gap-2 text-3xl">
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                    </div>
                    <span className="text-zinc-400">Meu número pessoal</span>
                </a>
            </main>
        </section>
    )
}