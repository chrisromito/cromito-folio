import React from 'react'

export default function ContentSection({
                                           title,
                                           content,
                                           children
                                       }: {
    title?: string;
    content: string;
    children?: React.ReactNode
}) {
    return (
        <section className="max-w-5xl mx-auto">
            {title && (
                <h2 className="mb-4 uppercase tracking-wider text-zinc-500 text-xl">
                    {title}
                </h2>
            )}
            <p className="text-zinc-400 leading-relaxed">
                {content || children}
            </p>
        </section>
    )
}