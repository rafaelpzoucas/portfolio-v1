import { SectionHeader } from "../atoms/SectionHeader";

export function AboutMe() {
    return(
        <section id="about">
           <SectionHeader.Root>
                <SectionHeader.Title>
                    {"<Sobre mim>"}
                </SectionHeader.Title>
                <SectionHeader.Subtitle>
                    Diretamente do interior de SP
                </SectionHeader.Subtitle>
            </SectionHeader.Root>
        </section>
    )
}