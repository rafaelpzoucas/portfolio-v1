import clsx from "clsx"
import { ImgHTMLAttributes, ReactNode } from "react"

interface ProjectRootProps {
    children: ReactNode
}

interface ProjectImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
}

interface ProjectDescriptionProps {
    children: ReactNode
}

interface ProjectDescriptionTitleProps {
    children: ReactNode
}

interface ProjectDescriptionTextProps {
    children: ReactNode
}

interface ProjectFooterProps {
    children: ReactNode
}

interface ProjectFooterStacksProps {
    children: ReactNode
}

interface ProjectFooterButtonProps {
    children: ReactNode
    outlined?: boolean
    link?: string
}

function ProjectRoot({ children }: ProjectRootProps) {
    return (
        <article className="flex flex-col gap-4 p-4 rounded-lg bg-zinc-800/40 backdrop-blur-sm">
            {children}
        </article>
    )
}

function ProjectImage({ src, alt, ...props }: ProjectImageProps) {
    return (
        <div className="h-80 sm:h-full">
            <img src={src} alt={alt} className="h-full rounded-md object-cover" {...props} />
        </div>
    )
}

function ProjectDescription({ children }: ProjectDescriptionProps) {
    return (
        <div className="flex flex-col gap-4 p-4">
            {children}
        </div>
    )
}

function ProjectDescriptionTitle({ children }: ProjectDescriptionTitleProps) {
    return (
        <h2 className="text-2xl font-medium text-fuchsia-500">
            {children}
        </h2>
    )
}

function ProjectDescriptionText({ children }: ProjectDescriptionTextProps) {
    return (
        <p className="text-zinc-300">
            {children}
        </p>
    )
}

function ProjectFooter({ children }: ProjectFooterProps) {
    return (
        <footer className="flex flex-row items-center justify-between p-4">
            {children}
        </footer>
    )
}

function ProjectFooterStacks({ children }: ProjectFooterStacksProps) {
    return (
        <div className="flex flex-row gap-3 text-2xl">
            {children}
        </div>
    )
}

function ProjectFooterButton({ link = "#", outlined = false, children }: ProjectFooterButtonProps) {
    return (
        <a href={link} className={clsx(
            "flex flex-row items-center gap-3 p-4 sm:px-4 sm:py-2 font-bold rounded-lg transition-all duration-150",
            {
                "bg-cyan-400 text-slate-800 hover:bg-cyan-500": !outlined,
                "bg-transparent border text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-800": outlined
            }
        )}>
            {children}
        </a>
    )
}

ProjectRoot.displayName = 'Project.Root'
ProjectImage.displayName = 'Project.Image'
ProjectDescription.displayName = 'Project.Description'
ProjectDescriptionTitle.displayName = 'Project.DescriptionTitle'
ProjectDescriptionText.displayName = 'Project.DescriptionText'
ProjectFooter.displayName = 'Project.Footer'
ProjectFooterStacks.displayName = 'Project.FooterStacks'
ProjectFooterButton.displayName = 'Project.FooterButton'

export const Project = {
    Root: ProjectRoot,
    Image: ProjectImage,
    Description: ProjectDescription,
    DescriptionTitle: ProjectDescriptionTitle,
    DescriptionText: ProjectDescriptionText,
    Footer: ProjectFooter,
    FooterStacks: ProjectFooterStacks,
    FooterButton: ProjectFooterButton,
}