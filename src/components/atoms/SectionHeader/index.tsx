import { ReactNode } from "react"

interface SectionHeaderRoot {
    children: ReactNode
}

interface SectionHeaderTitle {
    children: ReactNode
}

interface SectionHeaderSubtitle {
    children: ReactNode
}

function SectionHeaderRoot({ children }: SectionHeaderRoot) {
    return (
        <header>
            {children}
        </header>
    )
}

function SectionHeaderTitle({ children }: SectionHeaderTitle) {
    return (
        <h1 className="text-3xl sm:text-4xl font-semibold text-cyan-500">
            {children}
        </h1>
    )
}

function SectionHeaderSubtitle({ children }: SectionHeaderSubtitle) {
    return (
        <h4 className="text-zinc-400">
            {children}
        </h4>
    )
}

SectionHeaderRoot.displayName = 'TextInput.Root'
SectionHeaderTitle.displayName = 'TextInput.Title'
SectionHeaderSubtitle.displayName = 'TextInput.Subtitle'

export const SectionHeader = {
    Root: SectionHeaderRoot,
    Title: SectionHeaderTitle,
    Subtitle: SectionHeaderSubtitle,
}