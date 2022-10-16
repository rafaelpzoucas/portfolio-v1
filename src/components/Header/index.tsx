import { BackgroundCircles } from "../BackgroundCircles";

export function Header() {
    return (
        <div id="header" className="relative">
            <BackgroundCircles 
                position="topLeft" 
                className="w-[150px] h-[150px] rotate-180" 
            />

            <header className="relative z-10 w-full sm:py-8 p-8">
                <div className="flex flex-row items-center justify-between max-w-7xl m-auto z-20">
                    <h1 className="px-2 sm:px-0 font-bold text-2xl text-cyan-400">
                        <a href="#" className="flex sm:hidden">{"<RZ />"}</a>
                        <a href="#" className="hidden sm:flex">{"<RafaelZoucas />"}</a>
                    </h1>

                    <ul className="hidden sm:flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
                        <li><a href="#projects">Portfólio</a></li>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#comments">Comentários</a></li>
                        <li><a href="#getInTouch">Contato</a></li>
                    </ul>
                </div>
            </header> 
        </div>
    )
}