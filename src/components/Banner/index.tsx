import { BackgroundCircles } from '../BackgroundCircles'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CaretDoubleDown } from 'phosphor-react'


export function Banner() {
    return(
        <div className='relative'>
            <BackgroundCircles 
                className="bottom-0 right-0 rotate-180 w-2/3 max-w-md" 
            />
            <motion.section className="p-8 sm:grid grid-cols-2 h-[calc(100vh-126px)] sm:h-[calc(100vh-104px)]">
                <main className="flex flex-col h-full justify-between">
                    <div className="flex flex-col sm:items-start gap-16">
                        <div className="flex flex-col gap-4 text-2xl">
                            <span>👋 Hello, world!</span>
                            <h1 className="text-5xl text-cyan-600">Transformo <br /> suas <strong className="text-cyan-500">ideias</strong> em <strong className="text-cyan-500">realidade</strong></h1>
                            <h2 className="text-4xl">Sou desenvolvedor <span className="text-blue-600">Front-end</span>, entusiasta de <span className="text-fuchsia-700">UX Design</span></h2>
                        </div>
                        <a href="mailto:rafaelpzoucas@gmail.com"
                            className="
                                flex flex-row items-center justify-center gap-3 px-8 py-4 rounded-lg text-xl 
                                bg-[length:800%_400%] bg-gradient-to-r from-cyan-700 to-fuchsia-700 
                                transition-all duration-500 ease-in-out
                                animate-gradient-slow
                                hover:animate-gradient hover:scale-105
                            "
                        >
                            {/* bg-cyan-500 text-slate-900 hover:bg-cyan-600 transition-colors duration-300 */}
                            <FaRegEnvelope />
                            Me envie um e-mail
                        </a>
                    </div>

                    <div className="flex flex-row-reverse sm:flex-row items-center justify-between">
                        <div className="flex flex-row gap-4 pt-8 ml-auto sm:ml-0">
                            <a href="https://github.com/rafaelpzoucas" className="flex flex-col items-center gap-2 font-normal text-sm" target="_blank">
                                <div className="p-4 rounded-lg text-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
                                    <FaGithub />
                                </div>
                                Github
                            </a>
                            <a href="https://linkedin.com/in/rafaelpzoucas/" className="flex flex-col items-center gap-2 font-normal text-sm" target="_blank">
                                <div className="p-4 rounded-lg text-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
                                    <FaLinkedin />
                                </div>
                                Linkedin
                            </a>
                            <a href="https://wa.me/5518998261736" className="flex flex-col items-center gap-2 font-normal text-sm" target="_blank">
                                <div className="p-4 rounded-lg text-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300">
                                    <FaWhatsapp />
                                </div>
                                WhatsApp
                            </a>
                        </div>

                        <div className="container_mouse">
                            <span className="mouse-btn">
                                <span className="mouse-scroll"></span>
                            </span>

                            <CaretDoubleDown color="#ffffff" weight="thin" className='absolute bottom-12 sm:bottom-2 sm:left-[50%] sm:ml-[-15px] text-3xl animate-bounce-slow' />
                        </div>
                    </div>
                </main>
                
                <aside className="hidden sm:flex">
                    <img src="hand-coding.svg" alt="Illustration of two hands coding" />
                </aside>
            </motion.section>
        </div>
    )
}