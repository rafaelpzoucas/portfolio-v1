import { List, Sun } from "phosphor-react";
import { BackgroundCircles } from "../BackgroundCircles";

export function Header() {
    return (
        <div className="relative">
            <BackgroundCircles 
                position="topLeft" 
                className="w-[150px] h-[150px] rotate-180" 
            />

            <header className="relative z-10 w-full sm:py-8 p-4">
                <div className="flex flex-row items-center justify-between max-w-7xl m-auto z-20">
                    <h1 className="px-2 sm:px-0 font-bold text-2xl text-cyan-400">
                        <a href="#" className="flex sm:hidden">{"<RZ />"}</a>
                        <a href="#" className="hidden sm:flex">{"<RafaelZoucas />"}</a>
                    </h1>

                    <ul className="hidden sm:flex flex-row items-center gap-4">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Portfólio</a></li>
                        <li><a href="#">Comentários</a></li>
                        <li><a href="#">Contato</a></li>
                        <span>|</span>
                        <li className="flex items-center">
                            <button className="p-2 rounded-lg hover:bg-zinc-800">
                                <Sun size={24} className="text-amber-200" />
                            </button>
                        </li>
                    </ul>

                    <button className="flex sm:hidden p-4 ">
                        <List size={24} weight="bold" />
                    </button>
                </div>
            </header> 
        </div>
    )
}