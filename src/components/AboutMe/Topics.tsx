import { Content } from "@radix-ui/react-dialog"
import clsx from "clsx"
import { ImgHTMLAttributes, ReactNode } from "react"

interface TopicRootProps {
    children: ReactNode
    reverse?: boolean
}

interface TopicImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
}

interface TopicContentProps {
    children: ReactNode
}

interface TopicTitleProps {
    children: ReactNode
}

interface TopicTextProps {
    children: ReactNode
}

function TopicRoot({ children, reverse = false }: TopicRootProps) {
    return (
        <article 
            className={clsx(
                "flex flex-col sm:flex-row sm:items-center gap-12",
                {
                    "sm:flex-row-reverse": reverse
                }
            )}
        >
            {children}
        </article>
    )
}

function TopicImage({ src, alt, ...props }: TopicImageProps) {
    return <img src={src} alt={alt} {...props} />
}

function TopicContent({ children }: TopicContentProps) {
    return (
        <div className="text-zinc-300">
            {children}
        </div>
    )
}

function TopicTitle({ children }: TopicTitleProps) {
    return (
        <h1 className="text-5xl mb-4">{children}</h1>
    )
}

function TopicText({ children }: TopicTextProps) {
    return (
        <p className="text-xl leading-8 py-4 max-w-3xl">{children}</p>
    )
}

TopicRoot.displayName = 'Topic.Root'
TopicImage.displayName = 'Topic.Image'
TopicContent.displayName = 'Topic.Content'
TopicTitle.displayName = 'Topic.Title'
TopicText.displayName = 'Topic.Text'

export const Topic = {
    Root: TopicRoot,
    Image: TopicImage,
    Content: TopicContent,
    Title: TopicTitle,
    Text: TopicText
}