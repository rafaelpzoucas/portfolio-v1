import clsx from 'clsx'
import { ImgHTMLAttributes } from 'react'
import circle from '../assets/BackgroundCircle.svg'

interface BackgroundCirclesProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    position?: "topLeft" | "bottomRight"
}

export function BackgroundCircles({ position, className, ...props }: BackgroundCirclesProps) {
    return (
        <img 
            src={circle} 
            className={clsx(
                'absolute z-0 blur-3xl animate-pulse-slow',
                {
                    "top-0 left-0 -translate-x-1/2 -translate-y-1/2": position === "topLeft",
                    "bottom-0 right-0 translate-x-1/2 translate-y-1/2": position === "bottomRight"
                },
                className
            )}
            alt="bg" {...props} 
        />
    )
}