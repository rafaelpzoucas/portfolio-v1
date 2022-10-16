import { Quotes, Star } from "phosphor-react";
import { SectionHeader } from "../atoms/SectionHeader";
import { BackgroundCircles } from "../BackgroundCircles";

export function Comments() {
    return(
        <div id="comments">
            <BackgroundCircles 
                className="w-[150px] sm:w-[600px] h-[150px] sm:h-[600px] -translate-x-2/3 translate-y-1/4 rotate-180" 
            />
            
            <section className="flex flex-col gap-8">
                <SectionHeader.Root>
                    <SectionHeader.Title>
                        {"<Comentários>"}
                    </SectionHeader.Title>
                    <SectionHeader.Subtitle>
                        De pessoas que já trabalharam comigo
                    </SectionHeader.Subtitle>
                </SectionHeader.Root>
                
                <main className="flex flex-col items-start gap-8 sm:grid grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <article className="flex flex-col gap-6 p-8 rounded-lg bg-zinc-800">
                            <header className="flex flex-row items-center justify-between">
                                <Quotes size={32} weight="fill" className="text-fuchsia-700" />
                                <div className="flex flex-row gap-2">
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                </div>
                            </header>

                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>

                            <footer className="flex gap-4">
                                <img src="https://github.com/rafaelpzoucas.png" alt="" className="w-16 h-16 rounded-lg rounded-br-none" />
                                <aside className="flex flex-col">
                                    <strong className="text-xl">Nome Sobrenome</strong>
                                    <span className="text-sm text-zinc-400">CEO @Empresa</span>
                                </aside>
                            </footer>
                        </article>
                        <article className="flex flex-col gap-6 p-8 rounded-lg bg-zinc-800">
                            <header className="flex flex-row items-center justify-between">
                                <Quotes size={32} weight="fill" className="text-fuchsia-700" />
                                <div className="flex flex-row gap-2">
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                </div>
                            </header>

                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauriconsectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat."
                            </p>

                            <footer className="flex gap-4">
                                <img src="https://github.com/rafaelpzoucas.png" alt="" className="w-16 h-16 rounded-lg rounded-br-none" />
                                <aside className="flex flex-col">
                                    <strong className="text-xl">Nome Sobrenome</strong>
                                    <span className="text-sm text-zinc-400">CEO @Empresa</span>
                                </aside>
                            </footer>
                        </article>
                    </div>
                    <div className="flex flex-col gap-8">
                        <article className="flex flex-col gap-6 p-8 rounded-lg bg-zinc-800">
                            <header className="flex flex-row items-center justify-between">
                                <Quotes size={32} weight="fill" className="text-fuchsia-700" />
                                <div className="flex flex-row gap-2">
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                </div>
                            </header>

                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat."
                            </p>

                            <footer className="flex gap-4">
                                <img src="https://github.com/rafaelpzoucas.png" alt="" className="w-16 h-16 rounded-lg rounded-br-none" />
                                <aside className="flex flex-col">
                                    <strong className="text-xl">Nome Sobrenome</strong>
                                    <span className="text-sm text-zinc-400">CEO @Empresa</span>
                                </aside>
                            </footer>
                        </article>
                        <article className="flex flex-col gap-6 p-8 rounded-lg bg-zinc-800">
                            <header className="flex flex-row items-center justify-between">
                                <Quotes size={32} weight="fill" className="text-fuchsia-700" />
                                <div className="flex flex-row gap-2">
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                    <Star size={20} weight="fill" className="text-amber-400" />
                                </div>
                            </header>

                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus.a curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus.a curabitur consectetur quis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus senectus quis vel ultrices congue mattis est. Consectetur sit rhoncus mi sit vitae arcu. Vulputate viverra tempor consectetur aliquet lacus. Mauris ut curabitur et commodo massa curabitur consectetur quis feugiat."
                            </p>

                            <footer className="flex gap-4">
                                <img src="https://github.com/rafaelpzoucas.png" alt="" className="w-16 h-16 rounded-lg rounded-br-none" />
                                <aside className="flex flex-col">
                                    <strong className="text-xl">Nome Sobrenome</strong>
                                    <span className="text-sm text-zinc-400">CEO @Empresa</span>
                                </aside>
                            </footer>
                        </article>
                    </div>
                </main>
            </section>

            <BackgroundCircles 
                className="bottom-0 right-0 rotate-90 w-2/3 max-w-md" 
            />
        </div>
    )
}